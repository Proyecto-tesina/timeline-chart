import React, { Component } from 'react';

import './styles.css';

import ExperimentStatus from '../ExperimentStatus/index.js'


class ChartTitle extends Component {
  render() {
  	const { experiment } = this.props;
    const createdDate = new Date(experiment.created_at);
    
    return (
    <div className="ChartTitle">
    
      <ExperimentStatus 
          experiment={experiment} 
	    />

      <h2> 
        {`${createdDate.toLocaleString()}`} 
      </h2>

	   </div>
    );
  }
}

export default ChartTitle;
