package com.example.demo.service.impl;

import com.example.demo.model.Car;
import com.example.demo.model.Rent;
import com.example.demo.model.exceptions.InvalidRentException;
import com.example.demo.repository.Impl.CarRepositoryImpl;
import com.example.demo.repository.Impl.RentRepositoryImpl;
import com.example.demo.service.RentsService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RentServiceImpls implements RentsService {
    private final RentRepositoryImpl rentsRepository;
    private final CarRepositoryImpl carRepository;

    public RentServiceImpls(RentRepositoryImpl rentsRepository, CarRepositoryImpl carRepository) {
        this.rentsRepository = rentsRepository;
        this.carRepository = carRepository;
    }

    @Override
    public Rent addRent(Rent rent) {
        return rentsRepository.addRent(rent);
    }

    @Override
    public void deleteRent(Rent rent) {
        List<Car> cars=carRepository.getAllCars();

        rentsRepository.deleteRent(rent);
    }

    @Override
    public void deleteRentByID(int id) {
        rentsRepository.deleteRentByID(id);
    }

    @Override
    public Rent editRent(Rent rent, int idName) {
        deleteRent(getRentByID(idName).orElseThrow(InvalidRentException::new));
        return rentsRepository.addRent(rent);
    }

    @Override
    public Optional<Rent> getRentByID(int rentId) {
        return rentsRepository.getRentByID(rentId);
    }



    @Override
    public long getCountRents() {
        return rentsRepository.getCount();
    }

    public List<Car> findCarsByRent(int id) {
        return rentsRepository.findCarsByRent(id);
    }

    public Page<Rent> getPages(Integer pagenum, Integer size) {
        return rentsRepository.getPage(pagenum, size);
    }
}
