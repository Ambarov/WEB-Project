package com.example.demo.service;

import com.example.demo.model.Car;
import com.example.demo.model.exceptions.CarNotFoundException;

import java.util.List;

public interface CarService {
    List<Car> getCars();

    Car editCar(Car newCar, String idOld);

    Car addCar(Car car);

    void deleteCar(String id);

    Car getCarByID(String id) throws CarNotFoundException;




}