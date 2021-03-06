import React, { Component } from 'react';

import './styles.css';

import PaginationButton from '../PaginationButton/index.js'
import ChartTitle from '../ChartTitle/index.js'


class ChartHeader extends Component {

  render() {
    const { experiment, previousUrl, nextUrl } = this.props;

    return (
      <div className="ChartHeader">
        <PaginationButton
          updateExperiment={this.props.updateExperiment}
          url={previousUrl}
          text='Previous'
        />

        <ChartTitle
          experiment={experiment}
        />

        <PaginationButton
          updateExperiment={this.props.updateExperiment}
          url={nextUrl}
          text='Next'
        />
      </div>
    );
  }
}

export default ChartHeader;
