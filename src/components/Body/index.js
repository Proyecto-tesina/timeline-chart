import React, { Component } from 'react';

import './styles.css';

import ChartContainer from 'components/ChartContainer/index.js'


class Body extends Component {
  render() {
    return (
      <div className="Body">
        <ChartContainer />
      </div>
    );
  }
}

export default Body;
