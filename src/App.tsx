import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigator from './components/Navigator'
import Home from './pages/Home'
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
            <Route path="/">
              <Home />
            </Route>
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
