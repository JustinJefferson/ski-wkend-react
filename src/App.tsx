import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Navigator from './components/Navigator'

const links: string[] = [
  'Info',
  'Register',
  'Media',
  'FAQ'
]

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigator links={links} />
        <div>
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
