package com.example.demo.repository;

import com.example.demo.model.City;

import java.util.Optional;

public interface CitiesRepository {
    City addCity(City city);

    void deleteCity(City city);

    void deleteCityByID(String id);

    City editCity(City city, String IDoldCity);

    Optional<City> getCityByID(String name);
}