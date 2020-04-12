package com.example.demo.repository.JPAinterfaces;

import com.example.demo.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JPACarRepository extends JpaRepository<Car,String> {

    /*@Query("select c from Car c")
    List<Car> strings();*/

    //@Query("select c from Car c join CarCity i on (i.CAR_NAME=c.name)")
    List<Car> findCarByCities(@Param("city") String city);
}