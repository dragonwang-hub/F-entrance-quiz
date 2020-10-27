import React, { Component } from 'react';
import Home from './Home';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        Hello World
        <Home/>
      </div>
    );
  }
}

export default App;
