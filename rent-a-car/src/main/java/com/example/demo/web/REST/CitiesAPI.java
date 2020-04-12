package com.example.demo.web.REST;

import com.example.demo.model.Car;
import com.example.demo.model.City;
import com.example.demo.model.exceptions.CitiesLimitExceededException;
import com.example.demo.model.exceptions.InvalidCityException;
import com.example.demo.service.impl.CityServiceImpls;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "cities")
public class CitiesAPI {
    private final CityServiceImpls citiesService;

    public CitiesAPI(CityServiceImpls citiesService) {
        this.citiesService = citiesService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public City createCity(@RequestBody City city, HttpServletRequest req) {

        try {
            return citiesService.addCity(city);
        } catch (Exception e) {
            throw new CitiesLimitExceededException();
        }
    }

    @PatchMapping("/{id}")
    public City editCity(@RequestBody City city, @PathVariable String id) {
        try {
            return citiesService.editCity(city, id);
        } catch (Exception e) {
            throw new CitiesLimitExceededException();
        }
    }

    @DeleteMapping("/{id}")
    public void deleteCity(@PathVariable String id) {
        citiesService.deleteCityByID(id);
    }


    @GetMapping("")
    public Page<City> sortedCities(@RequestParam Integer pagenum, @RequestParam Integer size) {
        return citiesService.getPages(pagenum, size);
    }

    @GetMapping("eco")
    public List<City> getEcoCities(@RequestParam Boolean eco) {

        if (eco)
            return citiesService.getEcoCities();

        return citiesService.getNOTEcoCities();
    }

    @GetMapping("/{id}")
    public City getCity(@PathVariable String id) {
        return citiesService.getCityByID(id).orElseThrow(InvalidCityException::new);
    }

    @GetMapping("/{id}/cars")
    public List<Car> getCarsByCityUID(@PathVariable String id) {
       return citiesService.findCarsByCity(id);
    }


}