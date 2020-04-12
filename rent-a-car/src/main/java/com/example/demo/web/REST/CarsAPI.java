package com.example.demo.web.REST;

import com.example.demo.model.*;
import com.example.demo.model.exceptions.CarNotFoundException;
import com.example.demo.repository.Impl.CarRepositoryImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("cars")
public class CarsAPI {
    private final CarRepositoryImpl carRepository;

    public CarsAPI(CarRepositoryImpl carRepository) {
        this.carRepository = carRepository;
    }

    @PostMapping
    public Car addCar(@RequestParam String name, @RequestParam String description, @RequestParam String imgURL,
                      @RequestBody CityWrapper cities,
                      @RequestBody CharacteristicsWrapper characteristics,@RequestParam int price, @RequestBody RentWrapper rents) {
        List<City>list =cities.getCities();
        List<Characteristics>list2 = characteristics.getCharacteristics();
        List<Rent>list3 =rents.getRents();
        Car car = new Car(name, description,imgURL, list, list2,price,list3);


        return carRepository.addCar(car);
    }


    @PutMapping("/{id}")
    public Car editCar(
            @RequestBody Car car,
            @PathVariable String id) {
        return carRepository.editCar(car, id);
    }

    @PostMapping("/{id}")
    public void deleteCar(@PathVariable String id) {
        carRepository.deleteCar(id);
    }

    @GetMapping("lessThan")
    public List<Car> lessThan(@RequestParam Integer totalCities) {
        return carRepository.getCarsWithLessThan(totalCities);
    }

    @GetMapping()
    public List<Car> getCars() {
        return carRepository.getAllCars();
    }

    @GetMapping("/{id}")
    public Car getCar(@PathVariable String id) throws CarNotFoundException {
        return carRepository.getCarByID(id);
    }

    @GetMapping("compare")
    public List<City> lessThan(@RequestParam String car1, @RequestParam String car2) throws CarNotFoundException {
        return carRepository.compareCars(car1, car2);
    }


}