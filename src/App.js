import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/screens/Welcome';
import Listing from './components/screens/Listing';
import Details from './components/screens/Details';
import AddResort from './components/screens/AddResort';
import EditResort from './components/screens/EditResort';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router basename="/mountainr" >
        <div>
          <Route exact path="/" component={ Welcome }/>
          <Route path="/listing" component={ Listing }/>
          <Route path="/details/:id" component={ Details }/>
          <Route path="/add" component={ AddResort }/>
          <Route path="/edit/:id" component={ EditResort }/>
        </div>
      </Router>
    )
  }
}

export default App;
