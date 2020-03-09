import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Order from "./views/Order";
import Home from "./views/Home";
import Login from "./views/Login";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
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
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
