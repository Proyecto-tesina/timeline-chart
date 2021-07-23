import React, { Component } from "react";

import "./styles.css";

import PrimaryButton from "./Buttons/PrimaryLink/index.js";
import SecondaryLink from "./Buttons/SecondaryLink/index.js";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Car">
          <img
            className="CarImage"
            alt="Front of a car"
            src={`${process.env.PUBLIC_URL}/car.svg`}
          />
        </div>

        <div className="Links">
          <div className="PrimaryLinks">
            <PrimaryButton value="START" />
          </div>
          <div className="SecondaryLinks">
            {/* <SecondaryLink to="/configuration">Configuration</SecondaryLink> */}
            <SecondaryLink to="/statistics">Statistics</SecondaryLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
