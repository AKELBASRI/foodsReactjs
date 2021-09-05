import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { corestyles } from '../core/styles';
import { makeStyles } from "@material-ui/core/styles";

function Section2() {
    const coreclasses = corestyles();
    const classes = useStyles();
    return (
        <Grid 
           xs={12}
        direction="column"
        className={classes.section2}
        alignItems="center"
        justifyContent="space-between">
           <Typography variant="h1" className={coreclasses.sectionheading}>
           popular meals
      </Typography> 
        <Grid container direction="row"  justifyContent="space-evenly" className={classes.cardscontainer}>
            <Grid item  className={classes.card} direction="column" justifyContent="space-between"  alignItems="center">
                <img src="../../images/card-img-1.png" className={classes.cardimg} alt=""/>
                <h3 className={classes.cardname}>Fish</h3>
                <button className={classes.cardbtn}>Order now</button>
            </Grid>
            <Grid item  className={classes.card} direction="column" justifyContent="space-between"  alignItems="center">
                <img src="../../images/card-img-2.png" className={classes.cardimg} alt=""/>
                <h3 className={classes.cardname}>Cake</h3>
                <button className={classes.cardbtn}>Order now</button>
            </Grid>
            <Grid item  className={classes.card} direction="column" justifyContent="space-between"  alignItems="center">
                <img src="../../images/card-img-3.png" className={classes.cardimg} alt=""/>
                <h3 className={classes.cardname}>Lobster</h3>
                <button className={classes.cardbtn}>Order now</button>
            </Grid>
        </Grid> 
      </Grid>
    )
}

export default Section2
const useStyles = makeStyles((theme) => ({
    section2: {
        width: "100%",
        height: "100vh",
        backgroundColor: "#222",
        padding: "10rem 0",
        '@media (max-width:1400px)': {
            height: "auto",
            padding: "10rem 0 12rem 0"
        }
      },
      cardscontainer:{
        '@media (max-width:1400px)': {
        marginTop: "10rem"
        }
      },
    card:{
        width: "30rem",
        backgroundColor: "#a79a2d",
        padding: "4rem",
        boxShadow:" 1rem 1rem 1rem #000",
        position: "relative",
        transform: "rotateY(20deg) skewX(-2deg)",
        transition: "transform.5s, boxshadow.5s",
        "& img":{
            width: "100%",
            objectFit:"cover",
        },
        "&:hover":{
            transform: "rotateY(20deg) skewX(-2deg) translateY(-3rem)",
            boxShadow:" 2rem 2rem 2rem #000"
        } ,
        "&::before":{
            content: '""',
            height: "100%",
            width: "1rem",
            position: "absolute",
            backgroundColor: '#817824',
            top: '0',
            left: '-1rem',
            transform: 'skewY(45deg)',
            transformOrigin: 'right',
            boxShadow: '-0.1rem -0.1rem 0.1rem #000'
        },
        "&::after":{
            content: '""',
            height: "72.5%",
            width: "1rem",
            position: "absolute",
            backgroundColor: "#8f8317",
            top: "0rem",
            left: "29.1rem",
            transform: "rotate(90deg) skewY(-45deg)",
            transformOrigin: 'top right',
            boxShadow: '-0.1rem -0.1rem 0.1rem #000'
            // content: '""',
            // height: '1rem',
            // width: '100%',
            // position: 'absolute',
            // backgroundColor: '#8f8317',
            // top: '-1rem',
            // left: '0',
            // transform: 'skewX(45deg)',
            // transformOrigin: 'bottom',
            // boxShadow: '-0.1rem -0.1rem 0.1rem #000'
        },
        '@media (max-width:1400px)': {
            margin: "5rem"
            }
    },
    cardname:{
        fontSize: "3rem",
        fontWeight: "900",
        textTransform: "uppercase",
        letterSpacing: "0.5rem",
        color: "#111",
        margin: "2rem 0",
        textShadow: "0.15rem 0.15rem 0.15rem #000"
    },
    cardbtn:{
        width: "70%",
        backgroundColor: "#111",
        color: "#888",
        borderRadius: '5rem',
        fontSize: '1.5rem',
        fontWeight: '800',
        letterSpacing: '0.2rem',
        textTransform: 'capitalize',
        border: 'none',
        padding: '0.5rem 0',
        cursor: 'pointer',
        boxShadow: '-0.2rem -0.2rem 0.2rem #000'
    },
    cardimg:{
        width: "100%",
        /* height: 100%; */
        objectFit: "cover"
    }
}));