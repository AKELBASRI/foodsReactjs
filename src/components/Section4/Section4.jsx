import { Grid } from '@material-ui/core';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import useStyles from './StyleSection4';

function Section4() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.section4}
      alignItems="flex-start"
      justifyContent="space-around"
    >
      <div className={classes.section4text}>
        <h2 className={classes.section4heading}>Sign me Up</h2>
        <p className={classes.section4paragraph}>ne the first to know about new products</p>
      </div>
      <form>
        <Grid container alignItems="center">
          <input type="email" className={classes.signupforminput} placeholder="Enter Your Email" />
          <button type="submit" className={classes.signupformbtn}>
            <FaArrowRight />

          </button>
        </Grid>
      </form>

      <p className={classes.copyright}>
        AKELBASRI &copy; All Rights reserved
      </p>
    </Grid>
  );
}

export default Section4;
