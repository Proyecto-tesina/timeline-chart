import React, { Component } from 'react';

import './styles.css';


class AppHeader extends Component {

  render() {
    return (
      <header className="Header">
        {this.props.children}
      </header>
    );
  }
}

export default AppHeader;
