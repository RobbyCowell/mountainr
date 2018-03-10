import React, { Component } from 'react';
import PapaParse from 'papaparse';
import logo from './logo.svg';
import papaConfig from './config/papaparse';
import './App.css';

class App extends Component {

  handleUpload(evt) {
    let value = evt.target.files[0];
    PapaParse.parse(value, papaConfig);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="file" id="csv-file" accept=".csv" name="file" onChange={this.handleUpload.bind(this)}/>
      </div>
    );
  }
}

export default App;
