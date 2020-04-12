package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
public class RentWrapper {

    private List<Rent> rents;

    public List<Rent> getRents() {
        return rents;
    }


}