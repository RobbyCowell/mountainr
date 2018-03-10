import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history.js';
import Welcome from './components/screens/Welcome';
import Listing from './components/screens/Listing';
import Details from './components/screens/Details';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={ Welcome }/>
          <Route path="/listing" component={ Listing }/>
          <Route path="/details" component={ Details }/>
        </div>
      </Router>
    )
  }
}

export default App;
