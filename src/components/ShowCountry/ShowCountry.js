import React from 'react';
import { Link } from 'react-router-dom';
import './ShowCountry.css';
const ShowCountry = (props) => {
    const countries = props.dataAPI;
    console.log(countries);
    const {name, capital, nativeName, region, subregion, population} = countries;
    return (
        <div>
            <div className="country-style">
                <h1>Name : <small>{name}</small></h1>
                <Link to = {`/countries/${name}`}> <p>Details : {name}</p></Link>
                <h4> Capital : {capital}</h4>
                <h4> NativeName : {nativeName}</h4>
                <h4> Region : {region}</h4>
                <h4> Subregion : {subregion}</h4>
                <h4> Population : {population}</h4>
                {/* <Link to={`/friend/${id}`}><Button variant="primary">Show Details</Button></Link> */}
                <Link to = {`/countries/${name}`}><button> Details </button></Link>
            </div>
        </div>
    );
};

export default ShowCountry;