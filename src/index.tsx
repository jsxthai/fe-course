import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom"; 
import { ApolloProvider } from "@apollo/client";

import client from "./setup/apolloClient";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Router>
          <App />
          </Router>
        </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
