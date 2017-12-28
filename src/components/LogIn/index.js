import React, {Component} from 'react';
import {Desktop} from 'constants/Breakpoints';

require('./index.scss');

export default class Home extends Component {

  render() {
    return(
      <div className="app-LogIn">
        <h1>Welcome</h1>
      </div>
    );
  }
}
