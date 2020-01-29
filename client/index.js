import React from 'react';
import { render } from 'react-dom';
// import Root from client/Root.js
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import '../style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory';

// const history = createHistory()
render(
  <Provider store={store}>
    <Router>

        <Route exact path='/' component={App} />
        {/* <Route path="/*" component={() => 'NOT FOUND'} /> */}
 
    </Router>
  </Provider>,
  document.getElementById('root')
);
