import React from 'react';
import { render } from 'react-dom';
// import Root from client/Root.j
import LandingPageBody from './components/LandingPageBody.jsx'
import LogIn from './components/LogIn.jsx'
import Feeling from './components/HowAreYouFeeling.jsx'
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import '../style.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory';

// const history = createHistory()
render(
  <Provider store={store}>
    <Router>
        <a>
        <Link to='/'>Home</Link>
        </a>
        <a>
        <Link to='/login'>Login</Link>
        </a>
        <a>
        <Link to='/feeling'>Feeling</Link>
        </a>
       
        <Route exact path='/' component={LandingPageBody} />
        <Route path='/login' component={LogIn} />
        <Route path='/feeling' component ={Feeling} />
        {/* <Route path="/*" component={() => 'NOT FOUND'} /> */}
 
    </Router>
  </Provider>,
  document.getElementById('root')
);
