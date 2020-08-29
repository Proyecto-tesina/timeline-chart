import React, { Component } from 'react';

import './styles.css';


class ExperimentStatus extends Component {

	status() {
  	const { experiment } = this.props;

  	if (experiment.created_at && experiment.ended_at) {
  		return "finished";
  	} else if (experiment.created_at) {
  		return "running"
  	} else {
  		return "pending"
  	}
	}

  render() {
  	const { experiment } = this.props;
  	const status = this.status();

  	if (experiment === null) 
  		return null;

    return (
      <span className="ExperimentStatus">
      	Experiment <span className={status}> {status} </span>
      </span>
    );
  }
}

export default ExperimentStatus;
