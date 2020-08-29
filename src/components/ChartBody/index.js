import React, { Component } from 'react';

import './styles.css';

import Chart from "react-google-charts";

import ErrorMessage from 'components/ErrorMessage/index.js'
import Loader from 'components/Loader/index.js'

import ExperimentChart from 'chart/chart.js'


class ChartBody extends Component {

  render() {

    if (!this.props.isLoaded) {
        return <Loader />;

    } else if (this.props.error) {
        return <ErrorMessage 
          text='Ha ocurrido un error al cargar los experimentos.'
        />;

    } else {
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
                      title: 'Experiment Statistics',
                  },
                  timeline: {
                      showBarLabels: false,
                      colorByRowLabel: true,
                  },
                  hAxis: {
                      format: 'HH:mm:ss',
                  },
                  avoidOverlappingGridLines: false,
          }}
      />;
    }
  }
}

export default ChartBody;
