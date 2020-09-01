import React, { Component } from 'react';

import './styles.css';

import HomeImage from './HomeImage/index.js'
import HomeLinks from './HomeLinks/index.js'


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HomeImage />

        <HomeLinks />
      </div>
    );
  }
}

export default Home;
