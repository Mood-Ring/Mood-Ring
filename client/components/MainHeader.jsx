/***************************\
*                           *
*  Main Header: The header  *
*  for every page on the    *
*  site.                    *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';

//Styling for the whole header
const MainDiv = styled.div`
  font-family: 'Assistant', sans-serif;
  text-align: right;
`;

//Styling for the 'Mood-Ring' title

const TitleText = styled.p`
  text-align: center;
  margin: 2px;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
  font-size: 80px;
`;

//Styling for the Log In button
const LoginButton = styled.button`
  text-decoration: none;
  font-family: 'Assistant', sans-serif;
  border-radius: 20px;
  font-size: 20px;
  margin: 3px;
  color: black;
  &:focus {
    outline: none;
  }
`;


class MainHeader extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    // console.log('Page in header:', this.props.page);
    // const headerArray = [];
    // if (this.props.page != 'UserFeed') {
    //   if (this.props.page != 'Login')
    //     headerArray.push(
    //       <LoginButton key='login' href="" onClick={this.gotToLogin}>
    //         Log in
    //       </LoginButton>
    //     );
    //   if (this.props.page != 'Create')
    //     headerArray.push(
    //       <LoginButton key='create' href="" onClick={this.gotToCreate}>
    //         Sign up
    //       </LoginButton>
    //     );
    // }
    // headerArray.push(<TitleText key='titletext' onClick={this.gotToMain}>m☯☯d ring</TitleText>);
    return <TitleText key='titletext' onClick={this.gotToMain}>m☯☯d ring</TitleText>;
  }
}

export default MainHeader;
