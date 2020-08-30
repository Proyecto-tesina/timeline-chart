import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from 'components/Home/index.js';
import Statistics from 'components/Statistics/index.js';


class App extends Component {

  render(){

    return (
      <Router>
        <Switch>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
