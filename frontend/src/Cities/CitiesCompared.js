import React, {Component} from 'react'
import qs from 'qs'
import CarsService from "../repository/axiosCarRepository";
import CityComparedGroup from "./CityComparedGroup";

class CitiesCompared extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                cty: []
            }
    }


    componentDidMount() {
        let cars = qs.parse(window.location.search, {ignoreQueryPrefix: true});
        let car1 = cars.car[0];
        let car2 = cars.car[1];

        CarsService.getCompared(car1, car2).then((resp) => {
            this.setState({cty: resp.data})
        });
        console.log(this.state.cty)
    }

    render() {
        const cities = (
                <CityComparedGroup cities={this.state.cty}/>
        );

        return (

            <div className="App ">
                {cities}

            </div>
        );
    }
}


export default CitiesCompared;