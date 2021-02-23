import { withStyles, WithStyles } from "@material-ui/core/styles";
import React, { memo } from "react";
import Header from "../components/Header";
import "./App.css";

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  className?: string;
}

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

function App(props: Props) {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default memo(withStyles(styles)(App));
