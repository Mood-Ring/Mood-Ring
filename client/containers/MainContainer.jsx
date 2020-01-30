import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';
import Landing from '../components/Landing.jsx';
import MoodContainer from '../containers/MoodContainer.jsx';
import Footer from '../components/Footer.jsx';
import * as actions from '../actions/actions.js';
import { connect } from 'react-redux';

/* currently hard-coded until we get React Router working properly for login */
const mapStateToProps = (state) => {
  return {
    loggedIn: state.userState.loggedIn,
    currentUser: state.userState.currentUser,
    userMoods: [
          {
              "date": "2020-01-29T05:00:00.000Z",
              "mood": "anxious"
          },
          {
              "date": "2020-01-29T05:00:00.000Z",
              "mood": "anxious"
          },
          {
              "date": "2020-01-29T05:00:00.000Z",
              "mood": "sad"
          },
          {
              "date": "2020-01-29T05:00:00.000Z",
              "mood": "happy"
          },
          {
              "date": "2020-01-29T05:00:00.000Z",
              "mood": "happy"
          },
          {
              "date": "2020-01-30T05:00:00.000Z",
              "mood": "happy"
          },
          {
              "date": "2020-01-30T05:00:00.000Z",
              "mood": "happy"
          },
          {
              "date": "2020-01-30T05:00:00.000Z",
              "mood": "happy"
          },
          {
              "date": "2020-01-30T05:00:00.000Z",
              "mood": "happy"
          }
      ] 
  };
};

const mapDispatchToProps = (dispatch) => ({
  register: (username, password) => dispatch(actions.register(username, password)),
  login: (username, password) => dispatch(actions.login(username, password)),
  logout: () => dispatch(actions.logout()),
});

class MainContainer extends Component {
  constructor() {
    super();
    this.onRegister = this.onRegister.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  onRegister(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    this.props.Register(username, password);
  }
  onLogin(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    this.props.login(username, password);
  }
  onLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
        <Router>
            <Header onLogout={ this.onLogout } loggedIn={ this.props.loggedIn } />
            <Route exact path="/user/register" render={() => <Register onRegister={ this.onRegister }/> } />
            <Route exact path="/user/login" render={() => <Login onLogin={ this.onLogin }/> } />
            <Route exact path="/" render={() => <Landing onChangeQuote={this.onChangeQuote} quoteRandom={ this.props.quoteRandom }/> } />
            <Route exact path="/user/mood" render={() => <MoodContainer userMoods={ this.props.userMoods }/> } />
            <Footer />
        </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
