import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Countries from './components/Countries/Countries';

function App() {

  return (
    <div>
      <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/countries/:country">
            <Countries></Countries>
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
