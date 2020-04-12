package com.example.demo.repository.Impl;

import com.example.demo.model.Car;
import com.example.demo.model.City;
import com.example.demo.model.exceptions.CitiesLimitExceededException;
import com.example.demo.model.exceptions.InvalidCityException;
import com.example.demo.repository.CitiesRepository;
import com.example.demo.repository.JPAinterfaces.JPACarRepository;
import com.example.demo.repository.JPAinterfaces.JPACitiesRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Repository
public class CityRepositoryImpl implements CitiesRepository {
    private final JPACitiesRepository citiesRepository;
    private final JPACarRepository carRepository;

    public CityRepositoryImpl(JPACitiesRepository citiesRepository, JPACarRepository carRepository) {
        this.citiesRepository = citiesRepository;
        this.carRepository = carRepository;
    }

    @Override
    public City addCity(City city) {
        if (citiesRepository.findById(city.getName()).isPresent())
            throw new InvalidCityException();

        if (getCount()>7)
            throw new CitiesLimitExceededException();

        citiesRepository.save(city);
        return city;
    }

    @Override
    public void deleteCity(City city) {
        List<Car>cars=carRepository.findAll();
        for (Car c:cars) {
            c.getCities().remove(city);
        }
        citiesRepository.delete(city);
    }

    @Override
    public void deleteCityByID(String id) {
        City cty = getCityByID(id).orElseThrow(InvalidCityException::new);
        deleteCity(cty);
    }

    @Override
    public City editCity(City newCity, String IDoldCity) {
        citiesRepository.deleteById(IDoldCity);
        citiesRepository.save(newCity);
        return newCity;
    }

    @Override
    public Optional<City> getCityByID(String name) {
        return citiesRepository.findById(name);
    }


    public List<City> getEcoCities() {
        return citiesRepository.findByEcoTrue();
    }

    public List<City> getNOTEcoCities() {
        return citiesRepository.findByEcoFalse();
    }

    public long getCount(){
        return citiesRepository.count();
    }

    //todo:might fail

    public List<Car> findCarsByCity(String id) {
        List<Car> cars = new LinkedList<>();
        City cty = getCityByID(id).orElseThrow(InvalidCityException::new);
        for (Car c :carRepository.findAll()) {
            if (c.getCities().contains(cty))
                cars.add(c);
        }
        return cars;
    }


    public Page<City> getPage(Integer pagenum, Integer size) {
        return citiesRepository.findAll(PageRequest.of(pagenum, size, Sort.by("name").ascending()));
    }
}
