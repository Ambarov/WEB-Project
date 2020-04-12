package com.example.demo.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class CitiesLimitExceededException extends RuntimeException {

    public CitiesLimitExceededException() {
        super(CitiesLimitExceededException.class.getSimpleName());
    }

}