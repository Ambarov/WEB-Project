package com.example.demo.service.impl;

import com.example.demo.model.Car;
import com.example.demo.model.City;
import com.example.demo.model.exceptions.CarNotFoundException;
import com.example.demo.repository.CarRepository;
import com.example.demo.service.CarService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }


    @Override
    public List<Car> getCars() {
        return carRepository.getAllCars();
    }

    @Override
    public Car editCar(Car newCar, String idOld) {
        return carRepository.editCar(newCar, idOld);
    }

    @Override
    public Car addCar(Car car) {
        return carRepository.addCar(car);
    }

    @Override
    public void deleteCar(String id) {
        carRepository.deleteCar(id);
    }

    @Override
    public Car getCarByID(String id) throws CarNotFoundException {
        return carRepository.getCarByID(id);
    }

}