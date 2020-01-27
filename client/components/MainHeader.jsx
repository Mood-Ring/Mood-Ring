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
  width: 100%;
  border-style: solid;
  font-family: georgia;
  text-align: center;
`;

//Styling for the 'Mood-Ring' title
const TitleText = styled.button`
    border: none;
    display: block;
    margin-left: 45%;
    font-weight: bold;
    font-size: 30px;
    &:focus{
        outline: none;
    }
`;

//Styling for the Log In button
const LoginButton = styled.button`
    clear: left;
    text-decoration: none;
    border-radius: 20px;
    color: black;
    font-size: 20px;
    margin: 3px;
    &:focus{
        outline: none;
    }
`;

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

class MainHeader extends Component {
  constructor(props) {
    super(props);

    this.gotToLogin = this.gotToLogin.bind(this);
    this.gotToCreate = this.gotToCreate.bind(this);
    this.gotToMain = this.gotToMain.bind(this);
  }

  gotToLogin() {
    this.props.changePage(1);
  }

  gotToCreate() {
    this.props.changePage(3);
  }

  gotToMain(){
    this.props.changePage(0);
}
    render(){
        console.log("Page in header:", this.props.page);
        const headerArray = [];
        headerArray.push(<TitleText onClick = {this.gotToMain}>Mood-Ring</TitleText>);
        if(this.props.page != 'UserFeed'){
            if(this.props.page != 'Login') headerArray.push(<LoginButton href = "" onClick = {this.gotToLogin}>Log In</LoginButton>);
            if(this.props.page != 'Create') headerArray.push(<LoginButton href = "" onClick = {this.gotToCreate}>Sign Up</LoginButton>);
        }

        return(
            <MainDiv>
                {headerArray}
            </MainDiv>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
