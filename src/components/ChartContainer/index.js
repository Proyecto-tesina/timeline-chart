import React, { Component } from 'react';

import './styles.css';

import * as http from 'helpers/http.js'

import ChartHeader from 'components/ChartHeader/index.js'
import ChartBody from 'components/ChartBody/index.js'


class ChartContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExperiment: null,
      error: false,
      isLoaded: false,
    }
  }

  componentDidMount() {
    this.loadExperiment(http.lastExperimentUrl);
  }

  async loadExperiment(url) {
    try {
      let response = await http.get(url);

      this.setState({
        nextExperiment: response.next,
        currentExperiment: response.results[0],
        previousExperiment: response.previous,
        isLoaded: true
      });
    } catch (error) {
      console.error('Failed to fetch experiments: ', error);

      this.setState({
        error: true,
        isLoaded: true
      })
    }
  }

  render() {
    return (
      <div className="ChartContainer">
        <ChartHeader
            experiment={this.state.currentExperiment} 
            nextExperiment={this.state.nextExperiment} 
            previousExperiment={this.state.previousExperiment} 
            loadExperiment={this.loadExperiment.bind(this)}                     
        />
        
        <ChartBody 
            experiment={this.state.currentExperiment}
            error={this.state.error}
            isLoaded={this.state.isLoaded}
        />                    
      </div>
    );
  }
}

export default ChartContainer;
