package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
public class CityWrapper {

    private List<City> cities;

    public List<City> getCities() {
        return cities;
    }

    public void setIngredients(List<City> cities) {
        this.cities = cities;
    }
}