import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import {
  FaEgg,
  FaCheese,
  FaStroopwafel,
  FaHotdog,
  FaDrumstickBite,
  FaAppleAlt,
  FaIceCream,
  FaFish,
  FaCookie,
  FaSeedling,
} from "react-icons/fa";
import { Grid, Typography } from "@material-ui/core";
import { corestyles } from "../core/styles";

function Section1() {
    const parenticons = useRef(null);
    const LoopIcons = () => {
    let i = 0;
    const interval = setInterval(() => {
    let nodeMenu = ReactDOM.findDOMNode(parenticons.current);
    const icons = nodeMenu.querySelectorAll("svg");
    if (icons[i + 1] !== undefined) {
      icons[i].classList.remove("change");
      icons[i + 1].classList.add("change");
      i++;
    } else {
      icons[i].classList.remove("change");
      i = 0;
      icons[i].classList.add("change");
    }
    
      
    
    //     i++;
    //   const icon = nodeMenu.querySelector("svg.change");
    //   icon?.classList.remove("change");
    //   if (i > icons.length) {
    //     icons[0]?.classList.add("change");
    //     i = 1;
    //   } else {
    //     icon.nextElementSibling?.classList.add("change");
    //   }
    //   console.log(icon)
      }, 3000);
      return () => clearInterval(interval);
    
  };
  const classes = useStyles();
  const coreclasses = corestyles();
  useEffect(() => {
    
      LoopIcons();
   
  }, []);
  return (
    <Grid
      container
      //   xs={12}
      direction="column"
      className={classes.section1}
      alignItems="center"
      justifyContent="space-evenly"
    >
      {/* <Grid className={classes.section1}> */}
      <Typography variant="h1" className={coreclasses.sectionheading}>
        Variety of Foods
      </Typography>
      <div ref={parenticons} className={classes.section1icons}>
        <FaEgg className="change" />
        <FaStroopwafel />
        <FaCheese />
        <FaHotdog />
        <FaDrumstickBite />
        <FaAppleAlt />
        <FaIceCream />
        <FaFish />
        <FaCookie />
        <FaSeedling />
      </div>
    </Grid>
    // </Grid>
  );
}

export default Section1;
const useStyles = makeStyles((theme) => ({
  section1: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#333",
  },
  section1icons: {
    "& svg": {
      fontSize: "35rem",
      color: "#a79a2d",
      position: "absolute",
      transform: "translate(-50%, -50%) scale(0)",
      textShadow: "0.2rem 0.2rem 0.2rem #000",
      transition: "transform 0.3s",
      "&.change": {
        transform: "translate(-50%, -50%) scale(1)",
        transition: "transform 0.3s 0.3",
      },
      '@media (max-width:1000px)': {
        fontSize:"25rem"
        
      },
    },
  },
}));
