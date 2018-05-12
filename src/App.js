import React, { Component } from 'react';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

class App extends Component {
  render() {
    return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Colok</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row center-xs">
          <Form  className="col-xs-12 col-md-5"/>
        </div>
      </div>
    </ThemeProvider>
    );
  }
}

export default App;
