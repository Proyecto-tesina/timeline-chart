import React, { Component } from 'react';

import '../styles.css';
import './styles.css'

import { Link } from "react-router-dom";


class PrimaryButton extends Component {
  render() {
    return (      
      <Link to={this.props.to} className="animated-button8 Link PrimaryLink">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {this.props.children}
      </Link>
    );
  }
}

export default PrimaryButton;
