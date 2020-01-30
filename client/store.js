import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
// import {changePage} from './actions/actions.js';

const store = createStore(reducers, applyMiddleware(thunk));
// store.dispatch(changePage(0));
// console.log('getState', store.getState());
export default store;
