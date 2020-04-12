package com.example.demo.repository.Impl;

import com.example.demo.model.Car;
import com.example.demo.model.Rent;
import com.example.demo.model.exceptions.InvalidRentException;
import com.example.demo.repository.JPAinterfaces.JPACarRepository;
import com.example.demo.repository.JPAinterfaces.JPARentsRepository;
import com.example.demo.repository.RentsRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Repository
public class RentRepositoryImpl implements RentsRepository {
    private final JPARentsRepository rentsRepository;
    private final JPACarRepository carRepository;

    public RentRepositoryImpl(JPARentsRepository rentsRepository, JPACarRepository carRepository) {
        this.rentsRepository = rentsRepository;
        this.carRepository = carRepository;
    }

    @Override
    public Rent addRent(Rent rent) {
        rentsRepository.save(rent);
        return rent;
    }

    @Override
    public void deleteRent(Rent rent) {
        List<Car> cars=carRepository.findAll();

        rentsRepository.delete(rent);
    }

    @Override
    public void deleteRentByID(int id) {
        Rent rnt = getRentByID(id).orElseThrow(InvalidRentException::new);
        deleteRent(rnt);
    }

    @Override
    public Rent editRent(Rent newRent, int IDoldRent) {
        rentsRepository.deleteById(IDoldRent);
        rentsRepository.save(newRent);
        return newRent;
    }

    @Override
    public Optional<Rent> getRentByID(int rentId) {
        return rentsRepository.findById(rentId);
    }


    public long getCount(){
        return rentsRepository.count();
    }

    //todo:might fail

    public List<Car> findCarsByRent(int id) {
        List<Car> cars = new LinkedList<>();
        Rent rnt = getRentByID(id).orElseThrow(InvalidRentException::new);

        return cars;
    }


    public Page<Rent> getPage(Integer pagenum, Integer size) {
        return rentsRepository.findAll(PageRequest.of(pagenum, size, Sort.by("name").ascending()));
    }
}
