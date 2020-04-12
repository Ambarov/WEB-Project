import React from 'react'
import {Link,useHistory} from 'react-router-dom';
const CitiesAdd = (props) => {

    const history = useHistory();
    const historyy = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newCty = {
            name: e.target.city.value,
            eco: e.target.eco.checked,
            noOfCars: e.target.noOfCars.value,
            payment_type: e.target.payment_type.value
        };
        props.onNewCityAdded(newCty);
        history.push("/add");

    };


    return (
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left" style={{backgroundColor:"lightgray"}}>Add/Edit City</h4>
                <div className="form-group row">
                    <label htmlFor="city" className="col-sm-4 offset-sm-1 text-left">City name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name="city" id="city"
                               placeholder="City name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="noOfCars" className="col-sm-4 offset-sm-1 text-left">No. of cars</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="noOfCars" name="noOfCars" placeholder="No. of cars"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="eco" className="col-sm-4 offset-sm-1 text-left">ECO</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="checkbox" className="form-control" name="eco" id="eco"/>
                    </div>
                </div>

                <div className="form-group row">
                                   <label htmlFor="payment_type" className="col-sm-4 offset-sm-1 text-left">Payment</label>
                                   <div className="col-sm-6">
                                       <input type="text" className="form-control" name="payment_type" id="payment_type"
                                              placeholder="Payment"/>
                                   </div>
                               </div>

                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-0  text-center">
                        <button
                            type="submit"
                            className="btn btn-success text-upper"
                            onClick={() => {
                                    historyy.goBack()
                               }}>
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-0  text-center">
                        <button type="reset"
                                className="btn btn-secondary text-upper">
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-0  text-center">
                        <Link to="/cities" className="btn btn-danger text-upper">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CitiesAdd;