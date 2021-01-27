import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import '../App.css';

// API's
import { dailyData } from '../api'
import { Grid } from '@material-ui/core';


const ChartComponent = ({ globalData: { confirmed, recovered, deaths }, countrySelected }) => {
    const [dailyDataHook, setDailyDataHook] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            const data = await dailyData();

            setDailyDataHook(data)
        }
        fetchApi();
    }, [])

    // LINE CHART...
    const LineChart = (

        dailyDataHook.length ? (<Line
            data={{
                labels: dailyDataHook.map((l) => l.date),
                datasets: [{
                    label: 'infected',
                    data: dailyDataHook.map((d) => d.confirmed),
                    borderColor: 'blue',
                    backgroundColor: '#C2D8FD',
                    fill: true,
                }, {
                    label: 'deaths',
                    data: dailyDataHook.map((d) => d.deaths),
                    borderColor: 'red',
                    backgroundColor: '#FF8686',
                    fill: true,
                }

                ]

            }}
        />) : null
    )

    // BAR CHART...
    const BARCHART = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['#C2D8FD', '#42FA21', '#FF8686'],
                        borderColor: 'blue',
                        borderWidth: 1,
                        data: [confirmed.value, recovered.value, deaths.value]

                    }]
                }}

            />
        ) : null
    )



    return (
        <div className='div-chart'>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    {countrySelected ? BARCHART : LineChart}
                </Grid>
            </Grid>

        </div>
    )
}

export default ChartComponent;