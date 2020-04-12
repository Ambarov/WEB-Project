package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

//@Max(value = 3)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Cities")
public class City {

    @Id
    private String name;
    private Float noOfCars;
    private Boolean eco;
    private String payment_type;

    @Override
    public String toString() {
        return name;
    }
}
