import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import axios from "../custom-axios/axios";
import $ from 'jquery/dist/jquery';

const RentEdit = (props) => {
    console.log(window.location.pathname.split("/")[2]);
    const history = useHistory();

    const [rnt, setRnt] = useState({
        id: 999,
        name: "--Default name--",
        car: "--Default car--",
        dateFrom: "2020-01-01",
        dateTo: "2020-01-01",
        from: "00:00:00",
        to: "00:00:00",
        price:999
    });

    useEffect(() => {
        const rentName = window.location.pathname.split("/")[2];
        axios.get("/rents/" + rentName).then((data) => {
            setRnt(data.data);
        })
    }, []);


    const onFormSubmit = (e) => {
        e.preventDefault();
        const oldName = window.location.pathname.split("/")[2];

        const newRnt = {
            id: e.target.rent.value,
            name: e.target.name.value,
            car: e.target.car.value,
            dateFrom: e.target.dateFrom.value,
            dateTo: e.target.dateTo.value,
            from: e.target.from.value,
            to: e.target.to.value,
            price: e.target.price.value
        };
        const path = "/rents/" + oldName + "/edit";
        history.push("/rents");
        props.onEdit(newRnt, oldName);

    };


    const handleTermOnChange = (e) => {
        const paramName = e.target.rentId;
        const paramValue = e.target.value;
        setRnt({paramName: paramValue});
        disableSubmit()
    };

    function disableSubmit() {
        if ($("#rent").val().length > 20 || $("#price").val() > 999999999)
            $("#submitR").attr("disabled", true);

        else
            $("#submitR").attr("disabled", false);


    }


    return (
        <div className="row">
            <form className="card" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add/Edit Rent</h4>
                <div className="form-group row">
                    <label htmlFor="rent" className="col-sm-4 offset-sm-1 text-left">Rent ID</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name="rent" id="rent"
                               placeholder="Rent id"
                               value={rnt.rentId}
                               onChange={handleTermOnChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="name" name="name"
                               placeholder="Name"
                               value={rnt.name}
                               onChange={handleTermOnChange}/>
                    </div>
                </div>
                 <div className="form-group row">
                                    <label htmlFor="car" className="col-sm-4 offset-sm-1 text-left">Car</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="car" name="car"
                                               placeholder="Car"
                                               value={rnt.car}
                                               onChange={handleTermOnChange}/>
                                    </div>
                                </div>
                           <div className="form-group row">
                            <label htmlFor="dateFrom" className="col-sm-4 offset-sm-1 text-left">Date from</label>
                              <div className="col-sm-6">
                                <input type="text" className="form-control" id="dateFrom" name="dateFrom"
                                 placeholder="Date from"
                                 pattern="/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/"
                                 value={rnt.dateFrom}
                                 onChange={handleTermOnChange}/>
                                            </div>
                                        </div>
                            <div className="form-group row">
                                  <label htmlFor="dateTo" className="col-sm-4 offset-sm-1 text-left">Date to</label>
                                   <div className="col-sm-6">
                                     <input type="text" className="form-control" id="dateTo" name="dateTo"
                                      placeholder="Date to"
                                      pattern="/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/"
                                      value={rnt.dateTo}
                                        onChange={handleTermOnChange}/>
                                         </div>
                                         </div>
                           <div className="form-group row">
                            <label htmlFor="from" className="col-sm-4 offset-sm-1 text-left">From</label>
                               <div className="col-sm-6">
                                <input type="text" className="form-control" id="from" name="from"
                                  placeholder="From"
                                  pattern="\d\d:?\d\d"
                                  value={rnt.from}
                                  onChange={handleTermOnChange}/>
                                  </div>
                                  </div>
                                  <div className="form-group row">
                                     <label htmlFor="to" className="col-sm-4 offset-sm-1 text-left">To</label>
                                     <div className="col-sm-6">
                                       <input type="text" className="form-control" id="to" name="to"
                                         placeholder="To"
                                            pattern="\d\d:?\d\d"
                                            value={rnt.to}
                                            onChange={handleTermOnChange}/>
                                               </div>
                                               </div>
               <div className="form-group row">
                                   <label htmlFor="price" className="col-sm-4 offset-sm-1 text-left">Price</label>
                                   <div className="col-sm-6">
                                       <input type="text" className="form-control" name="price" id="price"
                                              placeholder="Price"
                                              value={rnt.price}
                                              onChange={handleTermOnChange}
                                       />
                                   </div>
                               </div>


                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-0  text-center">
                        <button
                            type="submit" id="submitR"
                            className="btn btn-primary text-upper">
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-0  text-center">
                        <button type="reset"
                                className="btn btn-warning text-upper">
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-0  text-center">
                        <Link to="/rents" className="btn btn-danger text-upper">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default RentEdit;