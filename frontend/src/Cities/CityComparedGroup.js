import React from 'react';

const getCitiesCompGrouped = (props) => {

    const cities = props.cities.map((city) => {

        let ecos = String(city.eco);
        let ecoStyle = "";
        if (city.eco)
            ecoStyle = "list-group-item list-group-item-success";


        return (
            <div className="card space-top" style={{width: "40rem","margin-top":30}}>
                <ul className="list-group list-group-flush">
                    <li className={`list-group-item`}>NAME: <strong>{city.name}</strong></li>
                    <li className={`list-group-item ${ecoStyle}`}>ECO: <strong>{ecos}</strong></li>
                    <li className="list-group-item">NO. OF CARS: <strong>{city.noOfCars}</strong></li>
                    <li className={`list-group-item`}>PAYMENT: <strong>{city.payment_type}</strong></li>
                </ul>
            </div>

        );

    });
    return(
        cities
    )
};
export default getCitiesCompGrouped;