import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import corestyles from '../../core/styles';
import GalleryData from '../../data/GalleryData';
import useStyles from './StyleSection3';

function Section3() {
  const coreclasses = corestyles();
  const classes = useStyles();
  return (
    <section className={classes.section3}>

      <Typography variant="h1" className={coreclasses.sectionheading}>
        gallery
      </Typography>
      <Grid
        container
        className={classes.gallery}
        alignItems="center"
        justifyContent="space-evenly"
        direction="row"
        xs={12}
      >

        {GalleryData.map((item, index) => (
          <a href="/" className={classes.gallerylink} title="Order Now">

            <img src={item.imgsrc} className={classes.foodimg} alt={`imgfood${index}`} />
            <Typography variant="h3" className={classes.foodname}>{item.name}</Typography>
            <p className={classes.description}>{item.description}</p>
          </a>
        ))}
      </Grid>
    </section>
  );
}

export default Section3;
