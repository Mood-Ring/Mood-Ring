import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import CreateUser from '../components/CreateUser.jsx';
import LogIn from '../components/LogIn.jsx';
import LandingPageBody from '../components/LandingPageBody.jsx';
import Feeling from '../components/HowAreYouFeeling.jsx';
import Footer from '../components/Footer.jsx';
import * as actions from '../actions/actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (reduxState) => {
  //used to bring in the pieces of state that the components on this page will use
  return {
    page: reduxState.page
  };
};

const mapDispatchToProps = (dispatch) => {
  //used to bring in actions that will be dispatched within the components on this page.
  return {
    changePage: (index) => {
      dispatch(actions.changePage(index));
    }
  };
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //changePage(0) serves the homepage for the app
    this.props.changePage(0);
  }

  render() {
    return (
        <Router>
            <Header></Header>
            <Route exact path="/" component={LandingPageBody} />
            <Route exact path="/signup" component={CreateUser} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/mood" component={Feeling} />
            <Footer></Footer>
        </Router>
    )

    // const display = [];
    // display.push(<Header />);
    // switch (this.props.page) {
    //   case 'Home':
    //     display.push(<LandingPageBody />);
    //     break;
    //   case 'Create':
    //     display.push(<CreateUser />);
    //     break;
    //   case 'Login':
    //     display.push(<LogIn />);
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
