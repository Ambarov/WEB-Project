import React, {Component} from 'react'
import axios from '../custom-axios/axios'
import CarByCtyList from "../Car/CarByCtyList";


class CityItem extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                cty: props.cty,
                cr: [],

            }
    }

    componentDidMount() {
        const cityName = window.location.pathname.split("/")[2];

        axios.get("/cities/" + cityName).then((data) => {
            this.setState({
                cty: data.data
            });
        });
        axios.get("/cities/" + cityName + "/cars").then((data) => {
            this.setState({
                cr: data.data
            })
        })
    }



    render() {
        let ecos = String(this.state.cty.eco);
        let ecoStyle = "";
        if (this.state.cty.eco)
            ecoStyle = "list-group-item list-group-item-success";




        return (
            <div className="card space-top1" style={{width: "40rem"}}>
                <ul className="list-group list-group-flush">
                    <li className={`list-group-item`}>NAME: <strong>{this.state.cty.name}</strong></li>
                    <li className={`list-group-item ${ecoStyle}`}>ECO: <strong>{ecos}</strong></li>
                    <li className="list-group-item">NO. OF CARS: <strong>{this.state.cty.noOfCars}</strong></li>
                    <li className={`list-group-item`}>PAYMENT: <strong>{this.state.cty.payment_type}</strong></li>
                </ul>
                <CarByCtyList cars={this.state.cr}/>
            </div>

        );
    }

}


export default CityItem;