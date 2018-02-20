import React, { Component } from 'react';
import Config from './Config';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        <p className="App-intro">
          Here is an example of using ENV variables in the app:
        </p>
        <p className="App-intro">
        Environment: {Config.environment}<br />
        Timezone: {Config.timezone}
        </p>
      </div>
    );
  }
}

export default App;
