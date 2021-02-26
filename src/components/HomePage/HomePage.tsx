import Paper from "@material-ui/core/Paper";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Categories from "../Categories";
import CourseDetailPage from "../CourseDetailPage";
import Courses from "../Courses";
import Header from "../Header";
import HeaderTitle from "../Header/HeaderTitle";
import Login from "../Login";
import ResultSearch from "../ResultSearch";
import Signup from "../Signup";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function HomePage() {
  const classes = useStyles();
  let query = useQuery();

  return (
    <Paper elevation={0} className={classes.body}>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HeaderTitle />
          <Courses />
          <Categories />
        </Route>
        <Route exact path={"/course/:id"}>
          <CourseDetailPage />
        </Route>

        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/signup"}>
          <Signup />
        </Route>

        <Route exact path={"/dashboard"}>
          <div> dashboard comming soon</div>
        </Route>
        <Route exact path={"/search"}>
          <ResultSearch text={String(query.get("text"))} />
        </Route>
      </Switch>
    </Paper>
  );
}
