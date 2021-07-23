import React from "react";

import ChartContainer from "./ChartContainer/index.js";
import "./styles.css";

function Statistics() {
  return (
    <div className="statistics-container">
      <header>
        <h1>Experiment statistics</h1>
      </header>

      <ChartContainer />
    </div>
  );
}

export default Statistics;
