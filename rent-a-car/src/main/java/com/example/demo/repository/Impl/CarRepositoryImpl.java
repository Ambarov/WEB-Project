package com.example.demo.repository.Impl;

import com.example.demo.model.Car;
import com.example.demo.model.City;
import com.example.demo.model.exceptions.CarNotFoundException;
import com.example.demo.repository.CarRepository;
import com.example.demo.repository.JPAinterfaces.JPACarRepository;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;

@Repository
public class CarRepositoryImpl implements CarRepository {
    private final JPACarRepository carRepository;

    public CarRepositoryImpl(JPACarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getAllCars(){
        return carRepository.findAll();
    }

    @Override
    public Car addCar(Car car) {
        carRepository.save(car);
        return car;
    }

    @Override
    public Car editCar(Car car, String id) {
        carRepository.deleteById(id);
        carRepository.save(car);
        return car;
    }

    @Override
    public void deleteCar(String id) {
        carRepository.deleteById(id);
    }

    @Override
    public Car getCarByID(String id) throws CarNotFoundException {
        return carRepository.findById(id).orElseThrow(CarNotFoundException::new);
    }

    @Override
    public List<Car> getCarsWithLessThan(int number) {
        List<Car> nova = new LinkedList<>();
        for (Car car :carRepository.findAll())
            if (car.getCities().size() < number)
                nova.add(car);

        return nova;
    }

    @Override
    public List<City> compareCars(String id1, String id2) throws CarNotFoundException {
        Car car1 = carRepository.findById(id1).orElseThrow(CarNotFoundException::new);
        Car car2 = carRepository.findById(id2).orElseThrow(CarNotFoundException::new);
        List<City> same = new LinkedList<>();
        for (City city :car1.getCities()) {
            if (car2.getCities().contains(city))
                same.add(city);
        }
        return same;
    }
}
