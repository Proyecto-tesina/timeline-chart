import React, { Component } from 'react';

import './styles.css';

import Chart from "react-google-charts";
import ExperimentChart from 'helpers/chart/chart.js'


class ChartBody extends Component {

  render() {

    let chart = new ExperimentChart(this.props.experiment);

    return <Chart
      height='100%'
      width='100%'
      className="Chart"
      chartType="Timeline"
      loader={<div>Cargando . . .</div>}
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
