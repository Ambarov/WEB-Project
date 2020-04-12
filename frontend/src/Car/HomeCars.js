import React from 'react';
import Car from "./OfferCar";
import styles from '../ambicss.css'
import CitiesCompared from "../Cities/CitiesCompared";


var kolili;

const getHomeCars = (props) => {

    const cars = props.cars.filter(f => f.price < 10).map((car) => {
        const myhook = (arr) => {
            kolili = arr;
            funky(kolili)
        };

        return (
            <Car car={car} key={car.name} koli={myhook}  colClass={"col-md-7 mt-2 col-sm-12"}/>
        );
    });

    var filtered = cars.filter(function (f) {
    return f.price > 5;
    });

    const submitForm = (e) => {

    };

    const funky = (arr) => {
        kolili = arr;
        console.log(kolili);
    };


    return (

        <form onSubmit={submitForm} action={"comp	are/"}>

        <div className="card-header">
        <div>
        <br></br>
                   <a href="/"><img src="https://images.cooltext.com/5401803.png" width="648" height="106" alt="Rentmac" /></a>
                   </div>
                        <div className="row">
                        <div>

                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
<p style={{fontSize:20}}>Welcome to our site! We are a car rental company located in many <a href="/cities">cities</a> in Macedonia with a goal of providing anyone in need of a car with an affordable and quality guaranteed car.</p>
<p style={{fontSize:20}}>We are also the first rental company in Macedonia supplied with eco friendly cars. Apart from caring for our customers we also care for the environment!</p>
        <h3 class="Title">Check out our best offers:</h3>
            <div className={"row"}>
                {cars}


            </div>
            </div>
            </div>
        </form>

    )
};


export default getHomeCars;