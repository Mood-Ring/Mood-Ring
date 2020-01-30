/***************************\
*                           *
*  Log In: The Log in Page! *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';
import MainHeader from './MainHeader.jsx'

//The main body styling
const MainDiv = styled.div`
  text-align: center;
  width: 80%;
  height: 650px;
  margin-top: 10px;
  font-family: 'Assistant', sans-serif;
`;

//The log in form styling
const LogForm = styled.form`
  clear: both;
  text-align: right;
  width: 50%;
  height: 300px;
  margin: auto;
  font-family: 'Assistant', sans-serif;
`;

//Submit button styling
const SubmitButton = styled.button`
  margin: auto;
  text-decoration: none;
  border-radius: 20px;
  opacity: 0.6%
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

const TitleText = styled.p`
  text-align: center;
  width: 100%;
  margin: 2px;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
  font-size: 80px;
`;

const WrongMessage = styled.p`
  color: red;
`;

const mapStateToProps = (reduxState) => {
  //used to bring in the pieces of state that the components on this page will use
  return {
    username: reduxState.username,
    password: reduxState.password
    //userList: reduxState.userList
  };
};

const mapDispatchToProps = (dispatch) => {
  //used to bring in actions that will be dispatched within the components on this page.
  return {
    setUsername: (userN) => {
      dispatch(actions.setUsername(userN));
    },
    setPassword: (password) => {
      dispatch(actions.setPassword(password));
    },
    addUser: () => {
      dispatch(actions.addUser());
    },
  };
};

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormClick = this.onFormClick.bind(this);
    this.changePage = this.changePage.bind(this);
    this.sendToSignUp = this.sendToSignUp.bind(this);
    
    this.state = {
      wrong: false
    };
  }

  onUserNameChange() {
    const value = document.getElementById('username').value;
    this.props.setUsername(value);
  }

  onPasswordChange() {
    const value = document.getElementById('password').value;
    this.props.setPassword(value);
  }
  //"User name or password is wrong"
  onFormClick(e) {
    e.preventDefault();
    const user = {
      username: this.props.username,
      password: this.props.password
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success == false) {
          this.setState({
            wrong: true
          });
        } else {
          this.props.addUser();
          this.props.changePage(2);
        }
      });
  }

  changePage() {
    this.props.history.push('/feeling')  
  }

  sendToSignUp() {
    this.props.history.push('/signup')
  }

  render() {
    let wrong = [];
    if (this.state.wrong) {
      wrong = [
        <br></br>,
        <WrongMessage>User name or password is wrong</WrongMessage>
      ];
    }
    return (
      <MainDiv>
        {/* <TitleText key='titletext' onClick={this.gotToMain}>m☯☯d ring</TitleText> */}
        <LogForm>
          <div>
            <h1>Log In</h1>
            <label for="username">username: </label>
            <input
              id="username"
              type="text"
              onChange={this.onUserNameChange}
            ></input>
            <br></br>
            <label for="password">password: </label>
            <input
              id="password"
              type="password"
              onChange={this.onPasswordChange}
            ></input>
            <br></br>
            <br></br>
            <button onClick={this.sendToSignUp}>Create Account</button>
            <SubmitButton onClick={this.changePage}>Submit</SubmitButton>
            {wrong}
          </div>
        </LogForm>
      </MainDiv>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
