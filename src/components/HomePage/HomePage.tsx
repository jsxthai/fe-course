import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import CourseDetail from "../CourseDetail";
import Courses from "../Courses";
import Header from "../Header";
import HeaderTitle from "../Header/HeaderTitle";
import ResultSearch from "../ResultSearch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function HomePage() {
  const classes = useStyles();
  let query = useQuery();
  console.log(query.get("text"));

  return (
    <Paper className={classes.body}>
      <Header />
      <Switch>
        <Route>
          <HeaderTitle />
          <Courses />
        </Route>
        <Route path={"/course/:id"}>
          <CourseDetail />
        </Route>
        <Route exact path={"/search"}>
          <ResultSearch text={String(query.get("text"))} />
        </Route>
      </Switch>

      {/* <Categories /> */}
    </Paper>
  );
}
