import React, {Component} from 'react';
import RentsList from "../Rents/RentsList";
import {Link} from "react-router-dom";
import CarsService from "../repository/axiosCarRepository";

class RentTable extends Component {


    constructor(props) {
        super(props);
        console.log("Constructor")
        this.state = {
            rnts: [],
        }

    }

    componentWillMount() {
        CarsService.fetchRents().then((data) => {
            console.log("component will mount AND FETCH");
            console.log(data.data.content);
            this.setState({
                rnts: data.data.content
            });
        });
    }

    onCheckBox = (e) => {
        console.log("CHECKBOX");

            CarsService.fetchRents().then((data) => {

                console.log(data.data.content);
                this.setState({
                    rnts: data.data.content,

                });
            });

        this.render()
    };

forceUp = (rentToDelete) => {
        this.setState((prevState) => {
            const startIndex = prevState.rnts.findIndex(i => i.rentId === rentToDelete.rentId);
            const deletedRent = prevState.rnts.splice(startIndex, 1);
            const rents = prevState.rnts;

            const newRentsList = rents;
            console.log("FORCE-UP");
            console.log(newRentsList);
            return {rnts: newRentsList}

        })
    };
    render() {
        console.log("RENDER");
        return (

            <div className="row">
           <div> <br></br>
            <br></br></div>
                <h4 className="text-upper text-left">Rents:</h4>
                <div className="table-responsive">
                    <table className="table tr-history table-bordered ">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">Rent ID no.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Car</th>
                            <th scope="col">Date from</th>
                            <th scope="col">Date to</th>
                             <th scope="col">From time</th>
                              <th scope="col">To time</th>
                               <th scope="col">Price</th>

                        </tr>
                        </thead>
                        <tbody>
                        <RentsList onPageClick={this.props.onPageClick}
                                        onDelete={this.props.onDelete}
                                        funkcija={this.forceUp}
                                        rents={this.state.rnts}


                        />
                        </tbody>
                    </table>
                </div>


            </div>

        );
    }

}

export default RentTable;