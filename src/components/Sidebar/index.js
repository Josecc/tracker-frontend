import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DateRange from 'components/DateRange';
import TrackerList from 'components/TrackerList';
import {getTrackers} from 'reducers/tracker';

require('./index.scss');

const Sidebar = ({trackers}) => (
  <div className="app-Sidebar">
    <h1>GeoSensor Tracker</h1>
    <hr />
    <DateRange />
    <hr />
    <TrackerList trackers={trackers} />
  </div>
);

Sidebar.propTypes = {
  trackers: PropTypes.array
};

const mapStateToProps = (state) => ({
  trackers: getTrackers(state.trackers)
});


export default connect(
  mapStateToProps
)(Sidebar);
