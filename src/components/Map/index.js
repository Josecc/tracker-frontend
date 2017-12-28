import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import {getTrackers} from 'reducers/tracker';

require('./index.scss');

const MapBox = ReactMapboxGl({
  accessToken: process.env.MAPBOX_API_TOKEN
});

const Map = ({trackers}) => (
  <MapBox
    style={process.env.MAPBOX_STYLE}
    containerStyle={{
      height: '100vh',
      width: '75vw'
    }}>
    {trackers && trackers[0] && trackers[0].map(tracker => (
      <Layer
        key={tracker.name}
        type="line"
        id={tracker.name}>

        {tracker.locations.map(location => <Feature key={location.x} coordinates={[location.x, location.y]}/>)}
      </Layer>
    ))}
  </MapBox>
);

const mapStateToProps = (state) => ({
  trackers: getTrackers(state.trackers)
});

export default connect(
  mapStateToProps
)(Map);
