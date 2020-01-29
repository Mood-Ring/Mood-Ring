/***************************\
*                           *
*  Landing Page Body: The   *
*  storage for the landing  *
*  page's main content.     *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';
import MainHeader from './MainHeader.jsx'

//Styling for the whole body
const MainDiv = styled.div`
  width: 100%;
  height: 650px;
  font-family: 'Assistant', sans-serif;
  text-align: center;
  margin-top: 10px;
`;

//Styling for the daily quote
const Quote = styled.h1`
  font-style: italic;
  font-family: 'Assistant', sans-serif;
  margin-top: 80px;
`;

//Styling for the log in button
const LoginButton = styled.button`
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin: 3px;
  width: 18%;
  height: 7%;
  &:focus {
    outline: none;
  }
`;

const mapStateToProps = (reduxState) => {
  //used to bring in the pieces of state that the components on this page will use
  return {
    page: reduxState.page,
    quote: reduxState.quote,
    author: reduxState.author
  };
};

const mapDispatchToProps = (dispatch) => {
  //used to bring in actions that will be dispatched within the components on this page.
  return {
    changePage: (index) => {
      dispatch(actions.changePage(index));
    },
    saveQuote: (quote, author) => {
      dispatch(actions.saveQuote(quote, author))
    }
  };
};

class LandingPageBody extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((res) => {
        let rand = Math.floor(Math.random() * 1620);
        console.log(res[rand].author);
        if (res[rand].author == null) {
          this.props.saveQuote(res[rand].text, 'Jon Gonzalez')

        } else {
          this.props.saveQuote(res[rand].text, res[rand].author)

        }
      });
  }

  changePage() {
    this.props.history.push('/login')
  }

  render() {
    //Variable for dynamic quote fetching
    const quoteComp = (
      <Quote>
        "{this.props.quote}" - {this.props.author}
      </Quote>
    );

    return (
      <MainDiv>
        <MainHeader />
        {quoteComp}
        <br></br>
        <LoginButton className="start-today" onClick={this.changePage}>
          start today
        </LoginButton>
      </MainDiv>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageBody);
