import { FormControl, Grid, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import '../App.css';

// API's
import { fetchCountries } from '../api';


const CountryPikerComponent = ({ countryHandler }) => {
    const [countryNames, setCountryNames] = useState([]);

    useEffect(() => {
        async function apiData() {
            const data = await fetchCountries();
            setCountryNames(data);
        }
        apiData();
    }, [countryNames])
    return (
        <div className='div-picker'>
            <Grid container>
                <Grid item xs={4} sm={4} md={4} >
                    <FormControl className='form-control'>
                        <NativeSelect onChange={(e) => countryHandler(e.target.value)}
                        >
                            <option value="Global">Global</option>
                            {countryNames.map((n, i) => {
                                return <option key={i} value={n}>{n}</option>
                            })}

                        </NativeSelect>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}
export default CountryPikerComponent;