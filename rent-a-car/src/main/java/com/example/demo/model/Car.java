package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Cars")
public class Car {
    @Id
    private String name;
    private String description;
    private String imgURL;
    @ManyToMany(targetEntity = City.class)
    @Column(name = "CarCity")
    private List<City> cities;
    @ManyToMany(targetEntity = Characteristics.class)
    @Column(name = "Characteristics")
    private List<Characteristics> characteristics;
    private int price;
    @ManyToMany(targetEntity = Rent.class)
    @Column(name = "CarRent")
    private List<Rent> rents;


    @Override
    public String toString() {
        String str="";
        for (City i : cities) {
            str+=i.toString()+" ";
        }
        return name + "  " + str;
    }
}