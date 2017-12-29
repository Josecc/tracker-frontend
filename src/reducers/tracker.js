const initialState = [];

export function getTrackers(state = initialState, action = {}) {
  switch (action.type) {
  case 'TRACKER_LIST_RECEIVED': {
    let trackers = [];
    Array.isArray(action.trackers) ? action.trackers.forEach(e => {
      trackers.push({
        name: e.data.properties.sensor_name,
        locations: e.data.geometry.coordinates.reduce((acc, cur, index) => {
          acc.push({
            time: new Date(e.data.properties.timestamp_array[index]),
            x: cur[0],
            y: cur[1],
          });
          return acc;
        }, []),
      });
    }) : null;
    return [...state, trackers];
  }
  default:
    return state;
  }
}
