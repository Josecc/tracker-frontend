import React, {Component} from 'react';

import DateRange from 'components/DateRange';
import TrackerList from 'components/TrackerList';

require('./index.scss');

export default class Sidebar extends Component {

  render() {
    return(
      <div className="app-Sidebar">
        <h1>GeoSensor Tracker</h1>
        <hr />
        <DateRange />
        <hr />
        <TrackerList />
      </div>
    );
  }
}
