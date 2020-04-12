import React, {Component} from 'react';

class CarByCty extends Component {

    render() {
        return (
            <div>
                <p>{this.props.car.name}  {this.props.car.description}</p>
            </div>
        );
    }
}
export default CarByCty;