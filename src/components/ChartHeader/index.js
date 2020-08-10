import React, { Component } from 'react';

import './styles.css';

import PaginationButton from 'components/PaginationButton/index.js'
import ChartTitle from 'components/ChartTitle/index.js'


class ChartHeader extends Component {

  render() {
    const experiment = this.props.experiment;
    const previousExperiment = this.props.previousExperiment;
    const nextExperiment = this.props.nextExperiment;

  	if (experiment === null) return null;

    return (
      <div className="ChartHeader">
      	<PaginationButton
          loadExperiment={this.props.loadExperiment}
          url={previousExperiment}
          text='Previous'          
        />

        <ChartTitle
          experiment = {experiment}
        />

      	<PaginationButton           
          loadExperiment={this.props.loadExperiment}
          url={nextExperiment}
          text='Next'
        />
      </div>
    );
  }
}

export default ChartHeader;
