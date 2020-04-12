import React from 'react';
import Car from "./car";
import styles from '../ambicss.css'
import CitiesCompared from "../Cities/CitiesCompared";


var kolili;

const getCars = (props) => {

    const cars = props.cars.map((car) => {
        const myhook = (arr) => {
            kolili = arr;
            funky(kolili)
        };

        return (
            <Car car={car} key={car.name} koli={myhook}  colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });

    const submitForm = (e) => {

    };

    const funky = (arr) => {
        kolili = arr;
        console.log(kolili);
    };


    return (
        <form onSubmit={submitForm} action={"comp	are/"}>
            <div className={"row"}>
                {cars}


            </div>
        </form>

    )
};


export default getCars;