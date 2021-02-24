import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Course from "./Course/Course";
import Typography from "@material-ui/core/Typography";
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    courses: {
      width: 1340,
    },
  })
);

export default function Courses() {
  const classes = useStyles();
  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">
        Courses
      </Typography>
      <div className={classes.root}>
        <Grid
          className={classes.courses}
          container
          alignContent="center"
          alignItems="center"
          justify="space-around"
          spacing={1}
        >
          {new Array(8).fill(0).map((item, index) => (
            <Grid item key={index}>
              <Course id={String(index)} link={String(`/course/${index}`)} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
