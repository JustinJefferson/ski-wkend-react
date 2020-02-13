import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/"></Route>
            <Route path="/info"></Route>
            <Route path="/register"></Route>
            <Route path="/media"></Route>
            <Route path="/faq"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
