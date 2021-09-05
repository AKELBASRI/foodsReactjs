import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import corestyles from '../../core/styles';
import useStyles from './StyleSection2';

function Section2() {
  const coreclasses = corestyles();
  const classes = useStyles();
  return (
    <Grid
      xs={12}
      direction="column"
      className={classes.section2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h1" className={coreclasses.sectionheading}>
        popular meals
      </Typography>
      <Grid container direction="row" justifyContent="space-evenly" className={classes.cardscontainer}>
        <Grid item className={classes.card} direction="column" justifyContent="space-between" alignItems="center">
          <img src="../../images/card-img-1.png" className={classes.cardimg} alt="" />
          <h3 className={classes.cardname}>Fish</h3>
          <button type="button" className={classes.cardbtn}>Order now</button>
        </Grid>
        <Grid item className={classes.card} direction="column" justifyContent="space-between" alignItems="center">
          <img src="../../images/card-img-2.png" className={classes.cardimg} alt="" />
          <h3 className={classes.cardname}>Cake</h3>
          <button type="button" className={classes.cardbtn}>Order now</button>
        </Grid>
        <Grid item className={classes.card} direction="column" justifyContent="space-between" alignItems="center">
          <img src="../../images/card-img-3.png" className={classes.cardimg} alt="" />
          <h3 className={classes.cardname}>Lobster</h3>
          <button type="button" className={classes.cardbtn}>Order now</button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Section2;
