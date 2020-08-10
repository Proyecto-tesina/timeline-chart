import React, { Component } from 'react';

import './styles.css';


class ChartTitle extends Component {
  render() {
    const createdDate = new Date(this.props.experiment.created_at);
    
    return (
      <h2 className="ChartTitle"> 
        {`${createdDate.toLocaleString()}`} 
      </h2>
    );
  }
}

export default ChartTitle;
