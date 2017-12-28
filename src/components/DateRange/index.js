import React, {Component} from 'react';

import Date from 'components/Date';

require('./index.scss');

export default class DateRange extends Component {

  render() {
    return(
      <div className="app-DateRange">
        <Date />
        <Date />
      </div>
    );
  }
}
