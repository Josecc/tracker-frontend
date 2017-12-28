export function fetchTrackers() {
  return fetch(process.env.GEOSENSOR_API_LINK).then(res => {return res.json();});
}

export function setTrackers(trackers) {
  return {
    type: 'TRACKER_LIST_RECEIVED',
    trackers,
  };
}

export function initialTrackers() {
  return function(dispatch) {
    return fetchTrackers().then(
      trackers => dispatch(setTrackers(trackers))
    );
  };
}
