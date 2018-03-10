import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './components/screens/Welcome';
import Listing from './components/screens/Listing';
import Details from './components/screens/Details';

import './App.css';

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
  

  // handleUpload(evt) {
  //   let value = evt.target.files[0];
  //   PapaParse.parse(value, papaConfig);
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <input type="file" id="csv-file" accept=".csv" name="file" onChange={this.handleUpload.bind(this)}/>
  //     </div>
  //   );
  // }
}

export default App;
