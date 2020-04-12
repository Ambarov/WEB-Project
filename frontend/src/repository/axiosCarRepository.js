import axios from '../custom-axios/axios'
import qs from 'qs'


const CarsService = {
    fetchCars: ()=> {
        return axios.get("/cars");
    },
    fetchCities: ()=> {
       return axios.get('/cities', {
            params: {
                pagenum: 0,
                size:20
            }
        });
    },
    fetchRents: ()=> {
           return axios.get('/rents', {
                params: {
                    pagenum: 0,
                    size:20
                }
            });
        },
    getCompared:(car1,car2)=>{
        return axios.get(`cars/compare?car1=${car1}&car2=${car2}`)
    },
    fetchExactCity: (cty)=> {
        return axios.get("/cars/"+cty+"/details");
    },
    getCarsByCity:(city)=>{
        return axios.get(`cities/${city}/cars`);
    },
    addCity: (cty) => {
        const data = {
            ...cty
        }


        const formParams = qs.stringify(data);
        console.log(data);
        return axios.post("/cities", data,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
    },
     addRent: (rnt) => {
                    const data = {
                        ...rnt
                    }
                    const formParams = qs.stringify(data);
                            console.log(data);
                            return axios.post("/rents", data,{
                                headers:{
                                    'Content-Type': 'application/json'
                                }
                            })
                        },
    updateCity : (ctyNew, ctyOld) => {
        const data = {
            ...ctyNew,
        }
        console.log("CITY:");
        console.log(ctyNew);
        return axios.patch("/cities/"+ctyOld,data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    getEcoCities : () => {
        const data = {
            eco:true
        };
        return axios.get("/cities/eco?eco=true", {

        });
    },
    deleteCity: (ctyID) => {
        return axios.delete(`/cities/${ctyID}`);
    },
    searchCarTerm: (searchTerm) => {
        return axios.get(`/cars?term=${searchTerm}`);
    }
}

export default CarsService;