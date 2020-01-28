import { createStore } from 'redux';
import reducers from './reducers/reducers.js';
import {changePage} from './actions/actions.js/index.js'

const store = createStore(reducers);
store.dispatch(changePage(0));
console.log('getState', store.getState());
export default store;
