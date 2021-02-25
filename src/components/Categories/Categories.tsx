import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import Category from "./Category";
import { data } from "./data.text";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categories: {
      display: "flex",
      height: "auto",
      flexWrap: "wrap",
    },
    category: {
      maxWidth: "1340px",
      cursor: "pointer",
      height: "auto",
      padding: "0 2rem",
      fontWeight: "bold",
      display: "flex",
    },
    cateName: {
      margin: "2rem 1.5rem",
      paddingLeft: "1.5rem",
      fontWeight: "bold",
      // maxWidth: 1340,
      flex: 1,
    },
    wrap: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

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
