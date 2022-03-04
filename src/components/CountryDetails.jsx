import { useState } from "react"
import { useParams } from "react-router-dom";
import countries from "../countries.json";



function getBorderFromLetters(countryCode){
    return countries.find(country=>country.alpha3Code === countryCode).name
}

export default function CountryDetails(props) {

    const [countryDetails, setCountryDetails] = useState(countries)
    const {alpha3Code} = useParams();

    const filteredCountry = countryDetails.filter((country)=>
        country.alpha3Code.includes(alpha3Code)
    )

    return (
        <div className="flex-center">
            <div className="country">
                <div className="image">
                <img src={`https://flagpedia.net/data/flags/w580/${filteredCountry[0].alpha2Code.toLowerCase()}.png`} alt="" width="100px" height="auto" />
                </div>
                <h2>{filteredCountry[0].name}</h2>
                <p>Capital: {filteredCountry[0].capital}</p>
                <p>Area: {filteredCountry[0].area} km²</p>

                <div className="flex">
                    <p>Borders:</p>
                    <p> {filteredCountry[0].borders.map(ele=><p>{getBorderFromLetters(ele)}</p>)}</p>
                </div>
            </div>
        </div>
        
    )
}