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
      justifyContent: "center",
      height: "933px",
      cursor: "pointer",
    },
    category: {
      width: "1340px",
      height: "auto",
      padding: "0 2rem",
      fontWeight: "bold",
    },
  })
);

const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">
        Top categories
      </Typography>
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
    </>
  );
};

export default Categories;
