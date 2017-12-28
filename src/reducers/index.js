import { combineReducers } from 'redux';
import {getTrackers} from './tracker';

export default combineReducers({
  trackers: getTrackers,
});
