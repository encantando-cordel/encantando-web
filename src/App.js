import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
import { BrowserRouter,Switch,Route, Redirect }  from 'react-router-dom';
import './App.css';

import  Home  from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path = "/home" exact component = {Home} />
            <Redirect from= "" to = "/home" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
