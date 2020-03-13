import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Login from './views/Login';
import Order from './views/Order';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { StateProvider } from './store';

const App = () => {
  const initialState = {
    selectedFood: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_FOOD':
        return {
          ...state,
          selectedFood: (() => {
            const _selectedFood = state.selectedFood;
            _selectedFood.push(action.payload);

            return _selectedFood;
          })()
        };
      default:
        return state;
    }
  };

  return (
    <React.Fragment>
      <StateProvider initialState={initialState} reducer={reducer}>
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
          <Footer />
        </BrowserRouter>
      </StateProvider>
    </React.Fragment>
  );
};

export default App;
