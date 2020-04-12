import React from 'react';
import styles from '../ambicss.css'
import CarByCty from "./CarByCty";

const CarByCtyList = (props) => {

    const cars = props.cars.map((car) => {
        return (
            <CarByCty car={car} key={car.name}/>
        );
    });

    const handlePageClick = (e) => {
        props.onPageClick(e.selected)
    };

    return (
        <div className={styles.newLine}>
            {cars}
        </div>

    )
};


export default CarByCtyList;