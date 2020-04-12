package com.example.demo.web.REST;

import com.example.demo.model.Car;
import com.example.demo.model.Rent;
import com.example.demo.model.exceptions.InvalidRentException;
import com.example.demo.model.exceptions.RentsLimitExceededExeption;
import com.example.demo.service.impl.RentServiceImpls;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "rents")
public class RentsAPI {
    private final RentServiceImpls rentsService;

    public RentsAPI(RentServiceImpls rentsService) {
        this.rentsService = rentsService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Rent createRent(@RequestBody Rent rent, HttpServletRequest req) {

        try {
            return rentsService.addRent(rent);
        } catch (Exception e) {
            throw new RentsLimitExceededExeption();
        }
    }

    @PatchMapping("/{id}")
    public Rent editRent(@RequestBody Rent rent, @PathVariable int id) {
        try {
            return rentsService.editRent(rent, id);
        } catch (Exception e) {
            throw new RentsLimitExceededExeption();
        }
    }

    @DeleteMapping("/{id}")
    public void deleteRent(@PathVariable int id) {
        rentsService.deleteRentByID(id);
    }


    @GetMapping("")
    public Page<Rent> sortedRents(@RequestParam Integer pagenum, @RequestParam Integer size) {
        return rentsService.getPages(pagenum, size);
    }


    @GetMapping("/{id}")
    public Rent getRent(@PathVariable int id) {
        return rentsService.getRentByID(id).orElseThrow(InvalidRentException::new);
    }

    @GetMapping("/{id}/cars")
    public List<Car> getCarsByRentUID(@PathVariable int id) {
        return rentsService.findCarsByRent(id);
    }

}
