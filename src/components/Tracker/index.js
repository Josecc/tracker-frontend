import React, {Component} from 'react';

require('./index.scss');

export default class Tracker extends Component {

  render() {
    let selected = this.props.tracker.selected ? 'app-Tracker-selected' : ' ';
    return(
      <div className={`app-Tracker ${selected}`}>
        <div className="app-Tracker-details">
          <div>
            <p>
              {this.props.tracker.name}
            </p>
            <p>
              {this.props.tracker.locations[0].time.getMonth() + 1}/
              {this.props.tracker.locations[0].time.getDate()}/
              {this.props.tracker.locations[0].time.getYear()}
            </p>
          </div>
          <div>
            <p>
              x: {this.props.tracker.locations[0].x.toFixed(2)}
            </p>
            <p>
              y: {this.props.tracker.locations[0].y.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="app-Tracker-time">
          <span>{this.props.tracker.locations[0].time.getHours()}
            :{this.props.tracker.locations[0].time.getMinutes()}</span>
        </div>
      </div>
    );
  }
}
