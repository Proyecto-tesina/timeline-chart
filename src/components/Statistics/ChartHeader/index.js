import React from "react";

import "./styles.css";

import PaginationButton from "./PaginationButton/index.js";
import ExperimentStatus from "./ExperimentStatus/index.js";

function ChartHeader(props) {
  const { experiment, previousUrl, nextUrl } = props;

  return (
    <div className="ChartHeader">
      <PaginationButton
        updateExperiment={props.updateExperiment}
        url={previousUrl}
        text="Previous"
      />

      <ExperimentStatus experiment={experiment} />

      <PaginationButton
        updateExperiment={props.updateExperiment}
        url={nextUrl}
        text="Next"
      />
    </div>
  );
}

export default ChartHeader;
