import React from "react";
import useStyles from './HomeStyles'
import { Typography } from '@mui/material'

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Typography variant='h1'>
                Welcome!
            </Typography>
        </div>
    )
}

export default Home;