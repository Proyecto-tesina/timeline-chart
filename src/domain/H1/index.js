import React, { Component } from 'react';

import './styles.css';


class HeaderTitle extends Component {
    
  render() {
    return (
      <h1 className="H1">
        {this.props.children}
      </h1>
    );
  }
}

export default HeaderTitle;
