import React, {Component} from 'react';
import Moment from "react-moment";
import {Link} from "react-router-dom";
import RentList from "../Rents/RentsList";

class OfferCar extends Component {

    render() {

        return (
            <div className={this.props.colClass}>
                <div className="card">
                    <div className="cars">
                        {this.cardHeader()}
                        {this.slotCharacter()}
                        {this.cardCities()}



                    </div>
                </div>
            </div>

        );
    }


    cardHeader() {
        return (
            <div className="card-header">
                <div className="row">
                    <h4 className="col-md-6" align="left">
                        {this.props.car.name}
                    </h4>
                    <div className="col-md-6" align="left" hspace="60">
                    <Link to={'/addR?'+this.props.car.price+'?'+this.props.car.name} className="btn btn-outline-secondary" >
                                        <span className="fa fa-car"><strong>Rent the car</strong></span>
                                    </Link>
                                    </div>
                </div>
            </div>);
    }
    cardCities() {
        return (
            <div className="card-header">
            <div align="left">Available in:</div>
                <div className="row">

                         {this.props.car.cities.map(city=>(
                             <a href={"/cities/" + city.name+"/details"}><span  style={{opacity:0}}>v</span>  {city.name}</a>
                                                                  ))}

                </div>
            </div>);
    }
    slotCharacter() {
        return (

            <div className="row">
                <div className="col-md-4 font-weight-bold">Characteristics:

                     {this.props.car.characteristics.map(characteristic=>(
                                           <p align="left"><span style={{opacity:0}}>invb</span>-{characteristic.characteristic}</p>
                                           ))}
                                             <p  align="left"><span style={{opacity:0}}>invjn</span>Price: {this.props.car.price}$/h</p>

                </div>
                <img src={this.props.car.imgURL} height="230" width="330"  align="middle" hspace="20"/>
            </div>
        );
    }
}


export default OfferCar;