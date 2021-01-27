import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        borderBottom: 10 ,
        borderBottomColor: 'blue'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    infected: {
        color: 'blue'
    },
    recovered: {
        color: 'green',
    },
    deaths: {
        color: 'red'
    }
});

export default function CardComponent({ globalData: { confirmed, deaths, recovered, lastUpdate } }) {
    const classes = useStyles();
    if (!confirmed) {
        return (
            <h1>
                Loading....
            </h1>
        )
    }
    return (
        <div className={classes.div}>
            <Grid container spacing={2}>
                <Grid spacing={0} item xs={12} sm={4} className={classes.infected}>
                    <Card className={classes.root} elevation={3} className={classes.infected}>
                        <CardContent>
                            <Typography className={classes.title, classes.infected} color="textSecondary" gutterBottom>
                                Infected
                           </Typography>
                            <Typography variant="h5" component="h2">
                                <CountUp
                                    start={0}
                                    end={confirmed.value}
                                    separator=','
                                    duration={2.5}
                                />
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="h5" >
                                Covid-19 Casses                  </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid spacing={0} item xs={12} sm={4}>
                    <Card className={classes.root} elevation={3}>
                        <CardContent>
                            <Typography className={classes.title,classes.recovered} color="textSecondary" gutterBottom>
                                Recovered
        </Typography>
                            <Typography variant="h5" component="h2" className={classes.recovered}>
                                <CountUp
                                    start={0}
                                    end={recovered.value}
                                    separator=','
                                    duration={2.5}
                                />
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="h5" className={classes.recovered} >
                                Covid-19 Casses                     </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid spacing={0} item xs={12} sm={4}>
                    <Card className={classes.root} elevation={3}>
                        <CardContent>
                            <Typography className={classes.title,classes.deaths} color="textSecondary" gutterBottom>
                                Deaths
        </Typography>
                            <Typography variant="h5" component="h2" className={classes.deaths} >
                                <CountUp
                                    start={0}
                                    end={deaths.value}
                                    separator=','
                                    duration={2.5}
                                />
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="h5"   className={classes.deaths}>
                                Covid-19 Casses
                    </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}
