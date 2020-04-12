package com.example.demo.repository;
import com.example.demo.model.Car;
import com.example.demo.model.City;
import com.example.demo.model.exceptions.CarNotFoundException;

import java.util.List;

public interface CarRepository {
    List<Car> getAllCars();

    Car addCar(Car car);

    Car editCar(Car car, String id);

    void deleteCar(String id);

    Car getCarByID(String id) throws CarNotFoundException;

    List<Car> getCarsWithLessThan(int number);

    List<City> compareCars(String id1, String id2) throws CarNotFoundException;
}