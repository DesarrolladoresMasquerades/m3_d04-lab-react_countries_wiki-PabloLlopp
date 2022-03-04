import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import {Routes, Route} from "react-router-dom";
import countries from "./countries.json";
import { useEffect, useState } from "react";

function App() {

  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    
}, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/:alpha3Code' element={<CountryDetails />} />
      </Routes>
      <CountriesList />
    </div>
  );
}

export default App;
