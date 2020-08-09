import React, { Component } from 'react';

import './styles.css';

import Chart from "react-google-charts";

import * as http from 'helpers/http.js'
import ExperimentChart from 'helpers/chart.js'

import ErrorMessage from 'components/ErrorMessage/index.js'


class ChartContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
            chartData: [],
            error: false,
            isLoaded: false
		}
	}

    async componentDidMount() {
        try {
            let lastExperiment = await http.lastExperiment();
            let chart = new ExperimentChart(lastExperiment);

            this.setState({            
                chartData: chart.data(),
                isLoaded: true
            });
        } catch(error) {
            console.error('Failed to fetch experiments: ', error);

            this.setState({
                error: true,
                isLoaded: true
            })
        }
    }

	render() {
        const loadMessage = 'Cargando . . .';

        const errorMessage = <ErrorMessage 
            text='Ha ocurrido un error al cargar los experimentos.'
        />;

        const chart = <Chart
            height='100%'
            width='100%'
            className="Chart"
            chartType="Timeline"
            loader={<div>Cargando . . .</div>}
            data={this.state.chartData}
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

        let content;

        if (!this.state.isLoaded) {
            content = loadMessage;
        } else if (this.state.error) {
            content = errorMessage;
        } else {
            content = chart;
        }

		return (
			<div className="ChartContainer">
                {content}		
			</div>
		);
	}
}

export default ChartContainer;
