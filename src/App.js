import React, { Component } from 'react';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import './App.css';

import logo from './logo.svg';
//import Form from './components/Form';
//import {Home} from './components/Home';
import Payment from './components/Payment';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { user : '5af71129c1839503fe3909c1'}; //Add user ID here for debug
  }

  render() {
    return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Colok</h1>
        </header>
        <div className="row center-xs">
          <Payment user={this.state.user} /> 
        </div>
      </div>
    </ThemeProvider>
    );
  }
}

export default App;
