import React from "react";

import "./styles.css";

function ChartTitle(props) {
  const { experiment } = props;
  const createdDate = new Date(experiment.created_at).toLocaleString();
  const status = get_status();

  function get_status() {
    if (experiment.created_at && experiment.ended_at) {
      return "finished";
    } else if (experiment.created_at) {
      return "running";
    } else {
      return "pending";
    }
  }

  return (
    <div className="ChartTitle">
      <span className="ExperimentStatus">
        Experiment <span className={status}> {status} </span>
      </span>
      <h2>{createdDate}</h2>
    </div>
  );
}

export default ChartTitle;
