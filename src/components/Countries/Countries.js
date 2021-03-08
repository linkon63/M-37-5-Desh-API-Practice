import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Countries = () => {
    const {country} = useParams();
    console.log(country);
    const [countryData, setCountryData] = useState([]);
    useEffect(()=> {
        let url = `https://restcountries.eu/rest/v2/name/${country}`;
        // const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setCountryData(data[0]))
    },[]);
    console.log(countryData);
    return (
        <div>
            <h1>Hello  Router {countryData.name} </h1>
        </div>
    );
};

export default Countries;