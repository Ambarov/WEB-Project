import React, {Component} from 'react';
import './App.css';
import CarsService from "./repository/axiosCarRepository";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Header/header";
import CarList from "./Car/CarsList";
import HomeCarList from "./Car/HomeCars";
import RentList from "./Rents/RentsList";
import Table from "./Table/Table";
import CitiesAdd from "./Cities/CitiesAdd"
import CityItem from "./Cities/CityItem";
import CitiesEdit from "./Cities/CitiesEdit";
import CitiesCompared from "./Cities/CitiesCompared";
import RentsAdd from "./Rents/RentsAdd";
import RentItem from "./Rents/RentItem";
import RentsEdit from "./Rents/RentEdit";
class App extends Component {
    loadCars = () => {
        CarsService.fetchCars().then((data) => {
            this.setState({
                cars: data.data
            })
        })
    };

    getCompared = (car1, car2) => {
        CarsService.getCompared(car1,car2).then((resp) => {
            return resp.data;
        })
    };

    loadCities = () => {
        CarsService.fetchCities().then((data) => {
            if (data.data.content.length > 0)
                this.setState({
                    cities: data.data.content
                });
            else
                this.setState({
                    cities: []
                })
        })
    };
    loadRents = () => {
            CarsService.fetchRents().then((data) => {
                    this.setState({
                        rents: data.data.content
                    });
            })
        };
    loadCits = () => {
        CarsService.fetchCities().then((data) => {
            console.log(data.data.content);
            return data.data.content;
        })
    };
    loadRnts = () => {
            CarsService.fetchRents().then((data) => {
                console.log(data.data.content);
                return data.data.content;
            })
        };

    loadExactCity = () => {
        CarsService.fetchCars().then((resp) => {
            return resp.data;
        })
    };
    deleteCity = (cityToDelete) => {
        CarsService.deleteCity(cityToDelete.name).then((response) => {
            this.setState((prevState) => {
                const startIndex = prevState.cities.findIndex(i => i.name === cityToDelete.name);
                const deletedCity = prevState.cities.splice(startIndex, 1);
                const cities = prevState.cities;

                const newCitiesList = cities;
                return {cities: newCitiesList}

            })
        })
    };


    createCity = (newCity) => {
        console.log(CarsService.addCity(newCity).then((response) => {
            const newCity = response.data;
            this.setState((prevState) => {
                const newCityRef = [...prevState.cities, newCity];
                return {
                    cities: newCityRef
                }
            });
        }));
    };
    createRent = (newRent) => {
            console.log(CarsService.addRent(newRent).then((response) => {
                const newRent = response.data;
                this.setState((prevState) => {
                    const newRentRef = [...prevState.rents, newRent];
                    return {
                        rents: newRentRef
                    }
                });
            }));
        };

    editCity = (ctyNew, oldName) => {
        CarsService.updateCity(ctyNew, oldName).then((resp) => {
            this.loadCities();
        })
    };
    getCarsByCity = (ctyName) => {
        return CarsService.getCarsByCity(ctyName).then((data) => {
            console.log(data.data);
            this.setState({
                carsByCty: data.data
            })
        });
    };


    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            cities: [],
            rents: []
        }
    }

    componentDidMount() {
        this.loadCars();
        this.loadCities();
        this.loadRents();
    }



    render() {
        const routing = (
            <Router>
                <Header/>
                <div className="container">
                    <Route path={"/cars"} exact render={() =>
                        <CarList onPageClick={this.loadCars} cars={this.state.cars}/>}>
                    </Route>
                     <Route path={"/"} exact render={() =>
                                            <HomeCarList onPageClick={this.loadCars} cars={this.state.cars}/>}>
                                  </Route>
                    <Route path={"/compare"} exact render={() =>
                        <CitiesCompared loadCty={this.getCompared} cars={this.state.cars}/>}>
                    </Route>
                    <Route path={"/cities"} exact render={() =>
                        <Table onPageClick={this.loadCities} cities={this.loadCits}
                               ctyDetails={this.fetchExactCity} onDelete={this.deleteCity}
                               getCarsByCity={this.getCarsByCity}
                        />

                    }>
                    </Route>
                     <Route path={"/rents"} exact render={() =>
                                            <RentList onPageClick={this.loadRents} rents={this.state.rents}
                                            />

                                        }>
                                        </Route>

                    <Route path={"/add"} exact render={() =>
                        <CitiesAdd onNewCityAdded={this.createCity}/>
                    }>
                    </Route>

                    <Route path={"/addR"} exact render={() =>
                      <RentsAdd onNewRentAdded={this.createRent}/>
                                        }>
                                        </Route>

                    <Route path={"/cities/:ctyName/details"} exact render={() =>
                        <CityItem onPageClick={this.loadCars}
                                        cty={this.loadExactCity}
                        />
                    }>
                    </Route>
                    <Route path={"/cities/:ctyName/edit"} exact render={() =>
                        <CitiesEdit onEdit={this.editCity}/>
                    }>
                    </Route>


                </div>

            </Router>
        );

        return (

            <div className="App">
                {routing}

            </div>
        );
    }


}

export default App;