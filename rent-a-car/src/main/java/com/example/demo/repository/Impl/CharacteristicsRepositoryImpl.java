package com.example.demo.repository.Impl;

import com.example.demo.model.Characteristics;
import com.example.demo.model.exceptions.InvalidCharacteristicsException;
import com.example.demo.repository.CharacteristicsRepository;
import com.example.demo.repository.JPAinterfaces.JPACharacteristicsRepository;
import org.springframework.stereotype.Repository;

@Repository
public class CharacteristicsRepositoryImpl implements CharacteristicsRepository {
    private final JPACharacteristicsRepository characteristicsRepository;
    public CharacteristicsRepositoryImpl(JPACharacteristicsRepository characteristicsRepository){
        this.characteristicsRepository=characteristicsRepository;
    }
    @Override
    public Characteristics addCharacteristics(Characteristics characteristics) {
        characteristicsRepository.save(characteristics);
        return characteristics;
    }

}
