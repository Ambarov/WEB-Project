import React from 'react';
import {Link} from "react-router-dom";

const getRents = (props) => {

    const deleteCty= (cty) => {

    };


    const rents = props.rents.map((rent) => {

        return (
            <tr>
                <td scope="col">{rent.rentId}</td>
                                <td scope="col">{rent.name}</td>
                                <td scope="col">{rent.car}</td>
                                <td scope="col">{rent.dateFrom}</td>
                                <td scope="col">{rent.dateTo}</td>
                                <td scope="col">{rent.from}</td>
                                <td scope="col">{rent.to}</td>
                                <td scope="col">{rent.price}</td>


            </tr>

        );
    });

    return (
            rents
    )
}



export default getRents;