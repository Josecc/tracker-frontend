import React, {Component} from 'react';

import Tracker from 'components/Tracker';

require('./index.scss');

export default class TrackerList extends Component {

  render() {
    if (this.props.trackers.length == 0)
    {
      return (<p>loading...</p>);
    }
    return(
      <div className="app-TrackerList">
        {this.props.trackers[0].map(tracker => (<Tracker key={tracker.name} tracker={tracker}></Tracker>))}
      </div>
    );
  }
}
