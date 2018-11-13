import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
import { BrowserRouter,Switch,Route, Redirect }  from 'react-router-dom';
import './App.css';

import  Home  from './components/Home/Home';
import Editor from './components/Editor/Editor';
import Credits from './components/Credits/Credits';
import ChooseCharacter from './components/ChooseCharacter/ChooseCharacter';
import CordelHistory from './components/CordelHistory/CordelHistory';
import SextilhaInfo from './components/SextilhaInfo/SextilhaInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path = "/home" exact component={Home} />
            <Route path ="/novo" exact component={Editor}/>
            <Route path = "/sextilha-info" exact component={SextilhaInfo}/>
            <Route path = "/home" exact component = { Home }/>
            <Route path = "/character" exact component = { ChooseCharacter }/>
            <Route path = "/history" exact component = { CordelHistory }/>
            <Route path = "/credits" exact component = {Credits}/>
            <Redirect from= "" to = "/home" />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
