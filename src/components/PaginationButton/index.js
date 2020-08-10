import React, { Component } from 'react';

import './styles.css';


class PaginationButton extends Component {
  
  handleClick() {
    const url = this.props.url;

    if (url === null) return;
    this.props.loadExperiment(url);
  }

  render() {
    const url = this.props.url;

    return (
      <button 
        className="ChartButton" 
        disabled={url === null}
        onClick={this.handleClick.bind(this)}>           
        {this.props.text} 
      </button>
    );
  }
}

export default PaginationButton;
