import { useEffect, useState } from 'react';
import './App.css';

// Components
import CardComponent from './components/cardComponent';
import ChartComponent from './components/chartComponent';
import CountryPikerComponent from './components/countryPickerComponent';

// API's
import { fetchData, fetchCountryData } from './api';
import { Grid, Typography } from '@material-ui/core';

function App() {

  const [globalData, setGlobalData] = useState({})

  //Country selected...
  const [countrySelected, setCountrySelected] = useState('');

  useEffect(() => {
    async function apiData() {
      const data = await fetchData(countrySelected[0]);
      setGlobalData(data);
    }
    apiData();
  }, [])

  async function countryHandler(country) {

    const data = await fetchCountryData(country)
    setGlobalData(data)
    setCountrySelected(country)

  }

  return (
    <div className='div-container'>
      <CardComponent globalData={globalData} />
      <CountryPikerComponent countryHandler={countryHandler} />
      <ChartComponent globalData={globalData} countrySelected={countrySelected} />
    </div>
  );
}

export default App;
