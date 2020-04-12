package com.example.demo.repository.JPAinterfaces;

import com.example.demo.model.Characteristics;
import com.example.demo.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JPACharacteristicsRepository extends JpaRepository<Characteristics,String> {

}
