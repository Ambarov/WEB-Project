package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

//@Max(value = 3)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Charact")
public class Characteristics {
    @Id
    private String characteristic;

    @Override
    public String toString() {
        return characteristic;
    }
}