import React, { Component } from 'react';

import './styles.css';


class Body extends Component {
  render() {
    return (
      <div className="Body">
        {this.props.children}
      </div>
    );
  }
}

export default Body;
