import React, {Component} from 'react';

require('./index.scss');

export default class Tracker extends Component {

  render() {
    console.log(this.props.tracker);
    return(
      <div className="app-Tracker">
        <p>{this.props.tracker.name}</p>
        <p>x: {this.props.tracker.locations[0].x}</p>
        <p>y: {this.props.tracker.locations[0].y}</p>
      </div>
    );
  }
}
