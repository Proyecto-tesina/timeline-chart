import React, { Component } from 'react';

import './styles.css';

import HeaderTitle from 'components/HeaderTitle/index.js'

class AppHeader extends Component {

  render() {
    return (
      <header className="Header">
        <HeaderTitle />
      </header>
    );
  }
}

export default AppHeader;
