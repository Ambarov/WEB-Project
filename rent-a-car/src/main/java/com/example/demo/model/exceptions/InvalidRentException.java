package com.example.demo.model.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)

public class InvalidRentException extends RuntimeException{
    public InvalidRentException() {
        super(InvalidRentException.class.getSimpleName());
    }

}
