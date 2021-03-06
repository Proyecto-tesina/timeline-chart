import React, { Component } from 'react';

import './styles.css';


class HomeImage extends Component {
  render() {
    return (
      <div className="Car">
          <img 
            className="CarImage"
            alt="Front of a car"
            src={`${process.env.PUBLIC_URL}/car.svg`} />
      </div>
    );
  }
}

export default HomeImage;
