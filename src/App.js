import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/screens/Welcome';
import Listing from './components/screens/Listing';
import Details from './components/screens/Details';

class App extends Component {
  render() {
    return (
      <Router>
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
