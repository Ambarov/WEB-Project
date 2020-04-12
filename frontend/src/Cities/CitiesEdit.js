import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import axios from "../custom-axios/axios";
import $ from 'jquery/dist/jquery';

const CitiesEdit = (props) => {
    console.log(window.location.pathname.split("/")[2]);
    const history = useHistory();

    const [cty, setCty] = useState({
        name: "--Default name--",
        eco: false,
        noOfCars: 999,
        payment_type: "Cash"
    });

    useEffect(() => {
        const cityName = window.location.pathname.split("/")[2];
        axios.get("/cities/" + cityName).then((data) => {
            setCty(data.data);
        })
    }, []);


    const onFormSubmit = (e) => {
        e.preventDefault();
        const oldName = window.location.pathname.split("/")[2];

        const newCty = {
            name: e.target.city.value,
            eco: e.target.eco.checked,
            noOfCars: e.target.noOfCars.value,
            payment_type: e.target.payment_type.value
        };
        const path = "/cities/" + oldName + "/edit";
        history.push("/cities");
        props.onEdit(newCty, oldName);

    };


    const handleTermOnChange = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setCty({paramName: paramValue});
        disableSubmit()
    };

    function disableSubmit() {
        if ($("#city").val().length > 34 || $("#noOfCars").val() > 999999999)
            $("#submit").attr("disabled", true);

        else
            $("#submit").attr("disabled", false);


    }


    return (
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left" style={{backgroundColor:"lightgray"}}>Add/Edit City</h4>
                <div className="form-group row">
                    <label htmlFor="city" className="col-sm-4 offset-sm-1 text-left">City name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name="city" id="city"
                               placeholder="City name"
                               value={cty.name}
                               onChange={handleTermOnChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="noOfCars" className="col-sm-4 offset-sm-1 text-left">No. of cars</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="noOfCars" name="noOfCars"
                               placeholder="No. of cars"
                               value={cty.noOfCars}
                               onChange={handleTermOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="eco" className="col-sm-4 offset-sm-1 text-left">ECO</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="checkbox" className="form-control" name="eco" id="eco"
                               checked={cty.eco}
                               onChange={handleTermOnChange}
                        />
                    </div>
                </div>

                 <div className="form-group row">
                                    <label htmlFor="payment_type" className="col-sm-4 offset-sm-1 text-left">Payment</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" name="payment_type" id="payment_type"
                                               placeholder="Payment"
                                               value={cty.payment_type}
                                               onChange={handleTermOnChange}
                                        />
                                    </div>
                                </div>
                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-0  text-center">
                        <button
                            type="submit" id="submit"
                            className="btn btn-success text-upper">
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


export default CitiesEdit;