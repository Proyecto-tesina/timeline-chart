import React from "react";

import Chart from "react-google-charts";
import ExperimentChart from "helpers/chart/chart.js";
import Loader from "components/Loader/index.js";
import "./styles.css";

function ChartBody(props) {
  const chart = new ExperimentChart(props.experiment);

  return (
    <div className="Chart">
      <Chart
        height="100%"
        width="100%"
        className="Chart"
        chartType="Timeline"
        loader={<Loader />}
        data={chart.data()}
        options={{
          vAxis: {
            title: "Experiment Statistics",
          },
          timeline: {
            showBarLabels: false,
            colorByRowLabel: true,
          },
          hAxis: {
            format: "HH:mm:ss",
          },
          avoidOverlappingGridLines: false,
        }}
      />
    </div>
  );
}

export default ChartBody;
