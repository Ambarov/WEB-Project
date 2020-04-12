package com.example.demo.repository;

import com.example.demo.model.City;
import com.example.demo.model.Rent;

import java.util.Optional;

public interface RentsRepository {
    Rent addRent(Rent rent);

    void deleteRent(Rent rent);

    void deleteRentByID(int id);

    Rent editRent(Rent rent, int IDoldRent);

    Optional<Rent> getRentByID(int rentID);
}