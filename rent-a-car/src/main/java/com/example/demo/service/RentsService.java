package com.example.demo.service;

import com.example.demo.model.City;
import com.example.demo.model.Rent;

import java.util.Optional;

public interface RentsService {

    Rent addRent(Rent rent);

    void deleteRent(Rent rent);

    Rent editRent(Rent rent, int idRent);

    Optional<Rent> getRentByID(int rentId);

    void deleteRentByID(int id);

    long getCountRents();
}
