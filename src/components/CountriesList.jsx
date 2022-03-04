import { useState } from "react";
import countries from "../countries.json";
import CountryDetails from "./CountryDetails";
import { Link } from "react-router-dom";

export default function CountriesList() {

    const [countriesList, setCountryList] = useState(countries)

    return (
        <div className="wrap scroll">
            {countriesList.map((country)=> (
                <div key={country.alpha3Code} className="box">
                {/*<img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt={country.name} width="100px" height="auto" />*/}
                    <h2>{country.name}</h2>
                    <p>{country.capital}</p>
                    <Link exact to={`${country.alpha3Code}`}>
                    <p>
                    Show more
                    </p>
                    </Link>
                </div>
            ))}
        </div>
    )
}