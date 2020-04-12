package com.example.demo.model.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class InvalidCharacteristicsException extends RuntimeException {

    public InvalidCharacteristicsException() {
        super(InvalidCharacteristicsException.class.getSimpleName());
    }

}