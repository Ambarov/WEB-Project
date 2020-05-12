import React, {Component} from 'react'
import axios from '../custom-axios/axios'
import CarByCtyList from "../Car/CarByCtyList";


class RentItem extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                rnt: props.rnt,
                cr: [],

            }
    }

    componentDidMount() {
        const rentName = window.location.pathname.split("/")[2];

        axios.get("/rents/" + rentName).then((data) => {
            this.setState({
                rnt: data.data
            });
        });
        axios.get("/rents/" + rentName + "/cars").then((data) => {
            this.setState({
                cr: data.data
            })
        })
    }



    render() {

        return (
            <div className="card space-top1" style={{width: "40rem"}}>
                <ul className="list-group list-group-flush">

                    <li className={`list-group-item`}>RENT ID: <strong>{this.state.rnt.rentId}</strong></li>
                    <li className={`list-group-item`}>NAME: <strong>{this.state.rnt.name}</strong></li>
                    <li className={`list-group-item`}>CAR: <strong>{this.state.rnt.car}</strong></li>
                    <li className={`list-group-item`}>FROM: <strong>{this.state.rnt.from}</strong></li>
                    <li className={`list-group-item`}>TO: <strong>{this.state.rnt.to}</strong></li>
                    <li className={`list-group-item`}>PRICE: <strong>{this.state.rnt.price}</strong> /h</li>
                </ul>
                <CarByCtyList cars={this.state.cr}/>
            </div>

        );
    }

}


export default RentItem;