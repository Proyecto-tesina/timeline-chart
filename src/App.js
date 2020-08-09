import React, { Component } from 'react';
import './App.css';

import Header from 'components/Header/index.js'
import Body from 'components/Body/index.js'

class App extends Component {

  render(){

    return (
    <div className="App">
      <Header />
      <Body />
    </div>
    );
  }
}

export default App;
