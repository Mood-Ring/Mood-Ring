import { combineReducers } from 'redux';
import userReducers from './reducers/reducers.js/index.js';

export default combineReducers({
  reduxState: userReducers
});
