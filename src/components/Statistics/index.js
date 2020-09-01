import React, { Component } from 'react';

import './styles.css';

import Header from 'domain/Header/index.js'
import Body from 'domain/Body/index.js'
import H1 from 'domain/H1/index.js'

import ChartContainer from './ChartContainer/index.js'


class Stadistics extends Component {
  render() {
    return (
      <div className="Stadistics">
        <Header>
          <H1>
            Experiment statistics
          </H1>
        </Header>

        <Body> 
          <ChartContainer />
        </Body>
      </div>
    );
  }
}

export default Stadistics;
