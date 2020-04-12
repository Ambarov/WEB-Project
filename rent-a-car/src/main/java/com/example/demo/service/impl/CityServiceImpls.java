package com.example.demo.service.impl;

import com.example.demo.model.Car;
import com.example.demo.model.City;
import com.example.demo.model.exceptions.InvalidCityException;
import com.example.demo.repository.Impl.CarRepositoryImpl;
import com.example.demo.repository.Impl.CityRepositoryImpl;
import com.example.demo.service.CitiesService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpls implements CitiesService {
    private final CityRepositoryImpl citiesRepository;
    private final CarRepositoryImpl carRepository;

    public CityServiceImpls(CityRepositoryImpl citiesRepository, CarRepositoryImpl carRepository) {
        this.citiesRepository = citiesRepository;
        this.carRepository = carRepository;
    }

    @Override
    public City addCity(City city) {
        return citiesRepository.addCity(city);
    }

    @Override
    public void deleteCity(City city) {
        List<Car>cars=carRepository.getAllCars();
        for (Car c:cars) {
            c.getCities().remove(city);
        }
        citiesRepository.deleteCity(city);
    }

    @Override
    public void deleteCityByID(String id) {
        citiesRepository.deleteCityByID(id);
    }

    @Override
    public City editCity(City city, String idName) {
        deleteCity(getCityByID(idName).orElseThrow(InvalidCityException::new));
        return citiesRepository.addCity(city);
    }

    @Override
    public Optional<City> getCityByID(String name) {
        return citiesRepository.getCityByID(name);
    }



    public List<City> getEcoCities() {
        return citiesRepository.getEcoCities();
    }

    public List<City> getNOTEcoCities() {
        return citiesRepository.getNOTEcoCities();
    }

    @Override
    public long getCountCities() {
        return citiesRepository.getCount();
    }

    public List<Car> findCarsByCity(String id) {
        return citiesRepository.findCarsByCity(id);
    }

    public Page<City> getPages(Integer pagenum, Integer size) {
        return citiesRepository.getPage(pagenum, size);
    }
}