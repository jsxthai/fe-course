import {
  Checkbox,
  createStyles,
  makeStyles,
  Theme as AugmentedTheme,
} from "@material-ui/core";
import React from "react";
import "./App.css";

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      color: theme.status.danger,
      "&$checked": {
        color: theme.status.danger,
      },
    },
    checked: {},
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pham Quoc Thai</h1>
        <Checkbox
          defaultChecked
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
      </header>
    </div>
  );
}

export default App;
