import React, { Component } from 'react';

import './styles.css';

import * as http from 'helpers/api/http.js'

import ErrorMessage from 'domain/ErrorMessage/index.js'
import Loader from 'domain/Loader/index.js'
import ChartHeader from 'components/Statistics/ChartHeader/index.js'
import ChartBody from 'components/Statistics/ChartBody/index.js'


class ChartContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      experiment: null,
      nextUrl: '',
      previousUrl: '',
      currentUrl: '',
      error: false,
      isLoaded: false,
    }
  }

  componentDidMount() {
    const url = http.lastExperimentUrl;

    this.updateExperiment(url);

    setInterval(this.fetchExperiment.bind(this), 1000);
  }

  updateExperiment(url) {
    this.setState(
      { currentUrl: url },
      this.fetchExperiment
    );
  }

  async fetchExperiment() {
    try {
      const url = this.state.currentUrl;
      const response = await http.get(url);

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
    if (!this.state.isLoaded) {
      return <Loader />;

    } else if (this.state.error || !this.state.experiment) {
      return <ErrorMessage
        text='Ha ocurrido un error al cargar los experimentos.'
      />;

    } else {
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
}

export default ChartContainer;
