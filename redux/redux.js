import { combineReducers } from 'redux';
import userReducers from './reducers.js';

export default combineReducers({
  users: userReducers
});
