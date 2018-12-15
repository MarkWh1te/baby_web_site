import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shici from './shici'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
         开开心心每天学一点
          </p>
          <Shici />

        </header>
      </div>
    );
  }
}

export default App;
