import { withStyles, WithStyles } from "@material-ui/core/styles";
import React, { memo } from "react";
import HomePage from "../components/HomePage";
import "./App.css";

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  className?: string;
}

const styles = {
  root: {},
};

function App(props: Props) {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default memo(withStyles(styles)(App));
