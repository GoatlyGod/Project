import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Home from "./views/Home";
import Login from "./views/Login";
import Order from "./views/Order";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/login" />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
