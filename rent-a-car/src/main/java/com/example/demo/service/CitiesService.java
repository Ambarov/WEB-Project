package com.example.demo.service;

import com.example.demo.model.City;

import java.util.Optional;

public interface CitiesService {

    City addCity(City city);

    void deleteCity(City city);

    City editCity(City city, String idName);

    Optional<City> getCityByID(String name);

    void deleteCityByID(String id);

    long getCountCities();
}
