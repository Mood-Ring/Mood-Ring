import { createStore } from 'redux';
import reducers from './reducers.js';
import {changePage} from './actions.js'

const store = createStore(reducers);
store.dispatch(changePage(0));
console.log('getState', store.getState());
export default store;
