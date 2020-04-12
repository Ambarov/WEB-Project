package com.example.demo;

import com.example.demo.model.Car;
import com.example.demo.model.Characteristics;
import com.example.demo.model.City;
import com.example.demo.model.Rent;
import com.example.demo.repository.Impl.CarRepositoryImpl;
import com.example.demo.repository.Impl.CharacteristicsRepositoryImpl;
import com.example.demo.repository.Impl.CityRepositoryImpl;
import com.example.demo.repository.Impl.RentRepositoryImpl;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class DATAHOLDER {
    private final CarRepositoryImpl carRepository;
    private final CityRepositoryImpl cityRepository;
    private final CharacteristicsRepositoryImpl characteristicsRepository;
    private final RentRepositoryImpl rentRepository;
    public DATAHOLDER(CarRepositoryImpl carRepository, CityRepositoryImpl cityRepository, CharacteristicsRepositoryImpl characteristicsRepository,RentRepositoryImpl rentRepository) {
        this.carRepository = carRepository;
        this.cityRepository = cityRepository;
        this.characteristicsRepository = characteristicsRepository;
        this.rentRepository=rentRepository;
    }

    @PostConstruct
    void init() {

        List<City> cities = new LinkedList<>();
        cities.add(new City("Skopje",  (float)150,true, "CASH/CARD"));
        cities.add(new City("Kumanovo",  (float)100,true, "CASH/CARD"));
        cities.add(new City("Bitola",  (float)100,false, "CASH"));
        cities.add(new City("Strumica",  (float)50,false, "CASH"));

        for (City city : cities) {
            cityRepository.addCity(city);
        }
        List<City> city1 = cities.subList(0,2).stream().collect(Collectors.toList());
        city1.add(cities.get(3));
        List<City> city2 = cities.subList(0,2).stream().collect(Collectors.toList());
        city2.add(cities.get(2));
        List<City> city3 = Stream.concat(cities.subList(0,2).stream(),cities.subList(2,4).stream()).collect(Collectors.toList());
        List<City> city4 = new LinkedList<>();
        city4.add(cities.get(0));

        LocalTime t1 = LocalTime.parse("08:20");
        LocalTime t2 = LocalTime.parse("09:20");
        LocalDate l1 = LocalDate.now();
        List<Rent> rents = new LinkedList<>();
        rents.add(new Rent(1,"nikola", "fiat", l1,l1, t1,t2,34));
        rents.add(new Rent(2,"dimitar", "fiat", l1,l1, t1,t2,34));


        for (Rent rent : rents) {
            rentRepository.addRent(rent);
        }

        List<Characteristics> characteristics = new LinkedList<>();
        characteristics.add(new Characteristics("Air conditioner"));
        characteristics.add(new Characteristics("CD-player"));
        characteristics.add(new Characteristics("Rear airbags"));
        characteristics.add(new Characteristics("Manual"));
        characteristics.add(new Characteristics("Auto"));
        characteristics.add(new Characteristics("Petrol (Gasoline)"));
        characteristics.add(new Characteristics("Eco"));
        characteristics.add(new Characteristics("Petrol/Ethanol"));
        characteristics.add(new Characteristics("Petrol (Economy)"));
        characteristics.add(new Characteristics("LPG"));
        characteristics.add(new Characteristics("Diesel(Economy)"));


        for (Characteristics characteristic : characteristics) {
            characteristicsRepository.addCharacteristics(characteristic);
        }
        List<Characteristics> car1 = Stream.concat(characteristics.subList(0,2).stream(),characteristics.subList(4,6).stream()).collect(Collectors.toList());
        List<Characteristics> car22 = characteristics.subList(1,3).stream().collect(Collectors.toList());
        car22.add(characteristics.get(4));
        car22.add(characteristics.get(7));
        List<Characteristics> car3 = Stream.concat(characteristics.subList(1,3).stream(),characteristics.subList(4,6).stream()).collect(Collectors.toList());
        List<Characteristics> car4 = Stream.concat(characteristics.subList(0,3).stream(),characteristics.subList(4,6).stream()).collect(Collectors.toList());
        List<Characteristics> car555 = characteristics.subList(0,2).stream().collect(Collectors.toList());
        car555.add(characteristics.get(8));
        car555.add(characteristics.get(4));
        car555.add(characteristics.get(6));
        List<Characteristics> car66 = characteristics.subList(1,4).stream().collect(Collectors.toList());
        car66.add(characteristics.get(9));
        car66.add(characteristics.get(6));
        List<Characteristics> car77 = characteristics.subList(2,4).stream().collect(Collectors.toList());
        car77.add(characteristics.get(10));
        car77.add(characteristics.get(6));
        List<Characteristics> car88 = characteristics.subList(1,4).stream().collect(Collectors.toList());
        car88.add(characteristics.get(8));
        car88.add(characteristics.get(6));









        List<Car> cars = new LinkedList<>();
        cars.add(new Car("Skoda Octavia IV Combi 2019", "fast","https://www.autozeitung.de/assets/field/images/skoda-octavia-iv-combi-2019-01.jpg", city3, car1,8,rents.subList(0,1)));
        cars.add(new Car("2018 Skoda Fabia III Combi ", "fast","https://i.ytimg.com/vi/sNA0Ori-ahY/maxresdefault.jpg", city2, car22,8,rents.subList(0,1)));
        cars.add(new Car("Skoda Citigo(facelift 2017)", "fast","https://i.ytimg.com/vi/xgF1t2FdU_M/maxresdefault.jpg", city3, car3,10,rents.subList(0,1)));
        cars.add(new Car("Volkswagen SpaceFox 2015", "fast","https://www.venelogia.com/uploads/600spacefox2.jpg", city1, car4,7,rents.subList(0,1)));
        cars.add(new Car("2020 Volkswagen Golf VIII", "fast","https://s1.cdn.autoevolution.com/images/models/VOLKSWAGEN_Golf-5-Doors-2019_main.jpg", cities.subList(0,2), car555,15,rents.subList(0,1)));
        cars.add(new Car("Renault Clio V TCe 2020", "fast","https://s3-eu-west-1.amazonaws.com/staticeu.izmocars.com/toolkit/commonassets/2020/20renault/20renaultclioeditiononehb5b/20renaultclioeditiononehb5b_pixGallery/640x480/renault_20clioeditiononehb5b_angularrear.jpg", cities.subList(0,2), car66,12,rents.subList(0,1)));
        cars.add(new Car("Renault Espace V 2020", "fast","https://www.autoimport72.fr/photos/1594/1594-15214-8584_g.png", cities.subList(0,2), car77,18,rents.subList(0,1)));
        cars.add(new Car("Opel Insignia Tourer 2020", "fast","https://www.renderhub.com/squir/opel-insignia-sports-tourer-2017/opel-insignia-sports-tourer-2017-01.jpg", city4, car88,20,rents.subList(0,1)));

        for (Car c : cars) {
            carRepository.addCar(c);
        }




    }
}