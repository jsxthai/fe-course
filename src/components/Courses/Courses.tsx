import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Course from "./Course/Course";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function Courses() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="stretch"
        spacing={2}
      >
        <Grid item xs={2}>
          <Course></Course>
        </Grid>
        <Grid item xs={2}>
          <Course></Course>
        </Grid>
        <Grid item xs={2}>
          <Course></Course>
        </Grid>{" "}
        <Grid item xs={2}>
          <Course></Course>
        </Grid>{" "}
        <Grid item xs={2}>
          <Course></Course>
        </Grid>{" "}
      </Grid>
    </div>
  );
}
