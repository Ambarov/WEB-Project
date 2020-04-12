import React from 'react';
import {Link} from "react-router-dom";

const getCities = (props) => {

    const deleteCty= (cty) => {
        props.onDelete(cty);
        props.funkcija(cty);
    };


    const cities = props.cities.map((city) => {

        return (
            <tr>
                <td scope="col">{city.name}</td>
                <td scope="col">{city.noOfCars}</td>
                <td scope="col">{city.eco.toString()}</td>
                <td scope="col">{city.payment_type}</td>
                <td scope="col">
                    <Link to={"/cities/"+city.name+"/edit"}>
                    <button  className="btn btn-sm btn-light btn-outline-secondary ">
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </button>
                    </Link>
                    <button onClick={()=>deleteCty(city)} className="btn btn-sm btn-outline-danger ">
                        <span className="fa fa-trash"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <Link to={"/cities/"+city.name+"/details"}>
                        <button className="btn btn-sm btn-outline-dark btn-info">
                            <span className="fa fa-info-circle"><strong>Details</strong></span>
                        </button>
                    </Link>

                </td>
            </tr>

        );
    });

    return (
            cities
    )
}



export default getCities;