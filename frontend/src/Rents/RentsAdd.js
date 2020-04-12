import React from 'react'
import {Link,useHistory} from 'react-router-dom';
const RentsAdd = (props) => {

    const history = useHistory();
    const historyy = useHistory();

    const onFormSubmitt = (e) => {
        e.preventDefault();
        const newRnt = {
            name: e.target.name.value,
            dateFrom: e.target.dateFrom.value,
            dateTo: e.target.dateTo.value,
            from: e.target.from.value,
            to: e.target.to.value,
        };
        props.onNewRentAdded(newRnt);
        history.push("/addR");

    };


    return (
        <div className="row">
            <form className="card" onSubmit={onFormSubmitt}>
                <h4 className="text-upper text-left" style={{backgroundColor:"lightgray"}}>Rent {props.cars}</h4>

                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name="name" id="name"
                               placeholder="Name"/>
                    </div>
                </div>



                <div className="form-group row">
                                            <label htmlFor="dateFrom" className="col-sm-4 offset-sm-1 text-left">Date from</label>
                                              <div className="col-sm-6">
                                                <input type="text" className="form-control" id="dateFrom" name="dateFrom"
                                                 placeholder="yyyy-mm-dd"
                                                 pattern="/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/"
                                                 />
                                                            </div>
                                                        </div>
                                            <div className="form-group row">
                                                  <label htmlFor="dateTo" className="col-sm-4 offset-sm-1 text-left">Date to</label>
                                                   <div className="col-sm-6">
                                                     <input type="text" className="form-control" id="dateTo" name="dateTo"
                                                      placeholder="yyyy-mm-dd"
                                                      pattern="/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/"
                                                      />
                                                         </div>
                                                         </div>
                                           <div className="form-group row">
                                            <label htmlFor="from" className="col-sm-4 offset-sm-1 text-left">From time</label>
                                               <div className="col-sm-6">
                                                <input type="text" className="form-control" id="from" name="from"
                                                  placeholder="hh:mm"
                                                  pattern="\d\d:?\d\d"
                                                 />
                                                  </div>
                                                  </div>
                                                  <div className="form-group row">
                                                     <label htmlFor="to" className="col-sm-4 offset-sm-1 text-left">To time</label>
                                                     <div className="col-sm-6">
                                                       <input type="text" className="form-control" id="to" name="to"
                                                         placeholder="hh:mm"
                                                            pattern="\d\d:?\d\d"
                                                           />
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
                            Rent
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-0  text-center"
                        >
                        <button type="reset"
                                className="btn btn-secondary text-upper" >
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-0  text-center">
                        <button className="btn btn-danger text-upper" onClick={() => {
                                                                    historyy.goBack()
                                                               }} >Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RentsAdd;