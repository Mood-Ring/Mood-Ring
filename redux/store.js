import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers.js';
import { changePage } from './actions.js';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools

const store = createStore(
  reducers,
  composeWithDevTools(),
);

console.log('getState', store.getState());
export default store;
