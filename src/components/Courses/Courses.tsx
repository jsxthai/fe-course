import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Course from "./Course/Course";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
  })
);

export default function Courses() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="space-around"
        spacing={1}
      >
        <Grid item>
          <Course />
        </Grid>
        <Grid item>
          <Course />
        </Grid>
        <Grid item>
          <Course />
        </Grid>
        <Grid item>
          <Course />
        </Grid>
        <Grid item>
          <Course />
        </Grid>
        <Grid item>
          <Course />
        </Grid>
        <Grid item>
          <Course />
        </Grid>
        <Grid item>
          <Course />
        </Grid>
      </Grid>
    </div>
  );
}
