import React, {Component} from 'react';
import CityList from "../Cities/CitiesList";
import {Link} from "react-router-dom";
import CarsService from "../repository/axiosCarRepository";

class Table extends Component {


    constructor(props) {
        super(props);
        console.log("Constructor")
        this.state = {
            cits: [],
            eco: false
        }

    }

    componentWillMount() {
        CarsService.fetchCities().then((data) => {
            console.log("component will mount AND FETCH");
            console.log(data.data.content);
            this.setState({
                cits: data.data.content
            });
        });
    }

    onCheckBox = (e) => {
        console.log("CHECKBOX");
        if (!this.state.eco) {
            CarsService.getEcoCities().then((data) => {
                console.log("ECO CITIES");
                console.log(data.data);
                this.setState({
                    cits: data.data,
                    eco: true
                });
            });
        }
        else {
            CarsService.fetchCities().then((data) => {
                console.log("NOT ECO CITIES");
                console.log(data.data.content);
                this.setState({
                    cits: data.data.content,
                    eco: false
                });
            });
        }
        this.render()
    };

    forceUp = (cityToDelete) => {
        this.setState((prevState) => {
            const startIndex = prevState.cits.findIndex(i => i.name === cityToDelete.name);
            const deletedCity = prevState.cits.splice(startIndex, 1);
            const cities = prevState.cits;

            const newCitiesList = cities;
            console.log("FORCE-UP");
            console.log(newCitiesList);
            return {cits: newCitiesList}

        })
    };
    render() {
        console.log("RENDER");
        return (

            <div className="row">
           <div> <br></br>
            <br></br></div>
                <h4 className="text-upper text-left">Cities we are located in:</h4>
                <div className="table-responsive">
                    <table className="table tr-history table-bordered ">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">No. of cars</th>
                            <th scope="col">Eco</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <CityList onPageClick={this.props.onPageClick}
                                        onDelete={this.props.onDelete}
                                        ctyDetails={this.props.ctyDetails}
                                        cities={this.state.cits}
                                        getCarsByCity={this.props.getCarsByCity}
                                        funkcija={this.forceUp}

                        />
                        </tbody>
                    </table>
                </div>
                <Link to="/add" className="btn btn-outline-secondary">
                    <span><strong>Add new city</strong></span>
                </Link>
                <div className="custom-control custom-switch row col-md-3">
                    <input  type="checkbox" className={"custom-control-input"} name="customSwitch1" id="customSwitch1"
                           onClick={this.onCheckBox}/>
                    <label className="custom-control-label" htmlFor="customSwitch1"> ALL CITIES/ ECO CITIES
                    </label>
                </div>
            </div>

        );
    }

}

export default Table;