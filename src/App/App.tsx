import React, { memo } from "react";
import HomePage from "../components/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <HomePage />
      {/* <Dashboard /> */}
    </>
  );
}

export default memo(App);
