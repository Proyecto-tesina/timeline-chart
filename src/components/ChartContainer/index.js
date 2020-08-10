import React, { Component } from 'react';

import './styles.css';

import * as http from 'helpers/http.js'

import ChartHeader from 'components/ChartHeader/index.js'
import ChartBody from 'components/ChartBody/index.js'


class ChartContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      experiment: null,
      nextUrl: '',
      previousUrl: '',
      currentUrl: http.lastExperimentUrl,
      error: false,
      isLoaded: false,
    }
  }

  componentDidMount() {
    this.loadExperiment();

    setInterval(this.loadExperiment.bind(this), 1000);
  }

  updateExperiment(url) {
    this.setState(
      {currentUrl: url}, 
      this.loadExperiment
    );
  }

  async loadExperiment() {
    try {
      let url = this.state.currentUrl;
      let response = await http.get(url);

      this.setState({
        nextUrl: response.next,
        previousUrl: response.previous,
        experiment: response.results[0],
        error: false,
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
            experiment={this.state.experiment} 
            nextUrl={this.state.nextUrl} 
            previousUrl={this.state.previousUrl} 
            updateExperiment={this.updateExperiment.bind(this)}
        />
        
        <ChartBody 
            experiment={this.state.experiment}
            error={this.state.error}
            isLoaded={this.state.isLoaded}
        />                    
      </div>
    );
  }
}

export default ChartContainer;
