import React from "react";
import "../src/App.css";
import InfoCard from "./components/InfoCard";
import Navbar from "./components/Navbar";
import Home from "../src/views/home";
import Login from "../src/views/Login"

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Login/>
    </React.Fragment>
  );
};

export default App;
