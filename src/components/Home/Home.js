import React, { useEffect, useState } from 'react';
import ShowCountry from '../ShowCountry/ShowCountry';

const Home = () => {

    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(response => response.json())
        .then(data => setCountries(data));
    },[]);
    // console.log(countries);
    return (
        <div>
            <h1> Country : {countries.length}</h1>
            {
                countries.map(desh => <ShowCountry dataAPI={desh}></ShowCountry>)
            }
        </div>
    );
};

export default Home;