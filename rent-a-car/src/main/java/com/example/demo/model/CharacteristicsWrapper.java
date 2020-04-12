package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
public class CharacteristicsWrapper {

    private List<Characteristics> characteristics;

    public List<Characteristics> getCharacteristics() {
        return characteristics;
    }

}