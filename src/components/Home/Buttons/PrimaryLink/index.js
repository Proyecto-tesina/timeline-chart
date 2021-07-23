import React from "react";
import "../styles.css";

function PrimaryButton(props) {
  // To access to component data we will need to bind "this" to the function
  function handleClick(e) {
    e.preventDefault();
    // TODO: extract this as constant
    fetch("http://localhost:5000/start-simulation").then(() => {
      console.log("Ended simulation execution");
    });
  }

  return (
    <div className="animated-button8 Link" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.value}
    </div>
  );
}

export default PrimaryButton;
