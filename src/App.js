import React from "react";
import "../src/App.css";
import InfoCard from "./components/InfoCard";
import Navbar from "./components/Navbar";
import Home from "../src/views/home";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
};

export default App;
