import React, { Component } from 'react';

import './styles.css';

import Chart from "react-google-charts";
import ExperimentChart from 'helpers/chart/chart.js'

import Loader from 'domain/Loader/index.js'


class ChartBody extends Component {

  render() {

    let chart = new ExperimentChart(this.props.experiment);

    return <Chart
      height='100%'
      width='100%'
      className="Chart"
      chartType="Timeline"
      loader={<Loader />}
      data={chart.data()}
      options={{
        vAxis: {
          title: 'Experiment Statistics'
        },
        timeline: {
          showBarLabels: false,
          colorByRowLabel: true,
        },
        hAxis: {
          format: 'HH:mm:ss'
        },
        avoidOverlappingGridLines: false,
      }}
    />;
  }
}

export default ChartBody;
