import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import Category from "./Category";
import { data } from "./data.text";
import useStyles from "./styles";

const Categories = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.cateName}
      >
        Top categories
      </Typography>
      <div>
        <Paper elevation={0} className={classes.categories}>
          <Paper elevation={0} className={classes.category}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              spacing={1}
            >
              {data.map((item, index) => (
                <Grid item key={index}>
                  <Category src={item.src} name={item.name} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Paper>
      </div>
    </div>
  );
};

export default Categories;
