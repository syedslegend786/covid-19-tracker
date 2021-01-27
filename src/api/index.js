import axios from 'axios';


const url = 'https://covid.mathdro.id/api';

export const fetchData = async (countrySelected) => {
    const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(url);
    return { confirmed, deaths, recovered, lastUpdate }

}


export const dailyData = async () => {
    const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
    const modifiedData = data.map((l) => ({
        confirmed: l.confirmed.total,
        deaths: l.deaths.total,
        date: l.reportDate,
    }))
    return modifiedData;
}

export const fetchCountries = async () => {
    const { data: { countries } } = await axios.get('https://covid19.mathdro.id/api/countries');
    return countries.map(n => n.name);
}

export const fetchCountryData = async (country) => {
    const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
    return { confirmed, deaths, recovered, lastUpdate }
}