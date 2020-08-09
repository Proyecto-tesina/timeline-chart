import React, { Component } from 'react';

import './styles.css';


class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ErrorMessage">
      	{this.props.text}
      </div>
    );
  }
}

export default ErrorMessage;
