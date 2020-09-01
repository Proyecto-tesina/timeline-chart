import React, { Component } from 'react';

import './styles.css';

import { Link } from "react-router-dom";


class SecondaryLink extends Component {
  render() {
    return (
      <Link to={this.props.to} className="animated-button3 Link SecondaryLink">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {this.props.children}
      </Link>
    );
  }
}

export default SecondaryLink;
