import React, { Component } from 'react';
import Home from './pages/home';
import Paystub from './pages/Paystub';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Pages from './pages';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
    <div className="screenview">
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/paystub" component={Paystub} />
        
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App;
