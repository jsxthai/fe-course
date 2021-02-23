import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Categories from "../Categories";
import Courses from "../Courses";
import Header from "../Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

export default function Variants() {
  const classes = useStyles();

  return (
    <Paper className={classes.body}>
      <Header />
      <Courses />
      <Categories />
    </Paper>
  );
}
