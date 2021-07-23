import React from "react";

function PaginationButton(props) {
  const url = props.url;

  function handleClick() {
    props.updateExperiment(url);
  }

  return (
    <button
      className="ChartButton"
      disabled={!Boolean(url)}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}

export default PaginationButton;
