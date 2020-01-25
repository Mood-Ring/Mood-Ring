import { createStore } from 'redux';
import reducers from './reducers.js';

const store = createStore(reducers);

console.log('getState', store.getState());
export default store;
