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

const mapStateToProps = (state) => {
  //used to bring in the pieces of state that the components on this page will use
  return {
    loggedIn: state.userState.loggedIn,
    currentUser: state.userState.currentUser,
    // page: state.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
//   //used to bring in actions that will be dispatched within the components on this page.
//   return {
//     changePage: (index) => {
//       dispatch(actions.changePage(index));
//     }
//   };
  addUser: (username, password) => dispatch(actions.addUser(username, password)),
  login: (username, password) => dispatch(actions.login(username, password)),
  logout: () => dispatch(actions.logout()),
});

class MainContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     //changePage(0) serves the homepage for the app
//     this.props.changePage(0);
//   }
  
  constructor() {
    super();
    this.onAddUser = this.onAddUser.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  onAddUser(e) {
    const username = e.target[0].value;
    const password = e.target[1].value;
    this.props.addUser(username, password);
  }
  onLogin(e) {
    const username = e.target[0].value;
    const password = e.target[1].value;
    this.props.login(username, password);
  }
  onLogout(e) {
    this.props.logout();
  }

  render() {
    return (
        <Router>
            <Header loggedIn={ this.props.loggedIn }/>
            <Route exact path="/user/signup" component={Register} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/mood" component={MoodContainer} />
            <Footer />
        </Router>
    )

    // const display = [];
    // display.push(<Header />);
    // switch (this.props.page) {
    //   case 'Home':
    //     display.push(<Landing />);
    //     break;
    //   case 'Create':
    //     display.push(<Register />);
    //     break;
    //   case 'Login':
    //     display.push(<Login />);
    //     break;
    //   case 'UserFeed':
    //     display.push(<Feeling />);
    //     break;
    // }
    // display.push(<Footer />);
    // return (
    //   <div>{display}</div>
    // )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
