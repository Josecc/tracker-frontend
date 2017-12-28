import React, {Component} from 'react';

import Sidebar from 'components/Sidebar';
import Map from 'components/Map';

require('./index.scss');

export default class Main extends Component {

  render() {
    return(
      <div className="app-Main">
        <Sidebar />
        <Map />
      </div>
    );
  }
}
