import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import Home from './pages/Home';
import Info from './pages/Info';
import Register from './pages/Register';
import Media from './pages/Media';
import FAQ from './pages/FAQ';

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
        <div>
          <Navigator links={links} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/media">
              <Media />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
