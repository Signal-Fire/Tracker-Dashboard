import React, { Component } from 'react';
import { Header } from './components';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "App-header">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
