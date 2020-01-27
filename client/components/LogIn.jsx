/***************************\
*                           *
*  Log In: The Log in Page! *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

//The main body styling
const MainDiv = styled.div`
  text-align: center;
  width: 80%;
  height: 600px;
  margin-top: 10px;
  font-family: 'Assistant', sans-serif;
`;

//The log in form styling
const LogForm = styled.form`
  text-align: right;
  width: 100%;
  height: 300px;
  margin: auto;
  font-family: 'Assistant', sans-serif;
`;

//Submit button styling
const SubmitBitton = styled.button`
  margin: auto;
  text-decoration: none;
  border-radius: 20px;
  color: white;
  opacity: 0.6%
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

class LogIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainDiv>
        <div className="login-form">
          <h1 style={{ textAlign: 'center' }}>Log In</h1>
          <LogForm>
            <div className="login-div">
              <label for="username">Username: </label>
              <input id="username" type="text"></input>
              <br></br>

              <label for="password">Password: </label>
              <input id="password" type="text"></input>
              <br></br>

              <SubmitBitton>Submit</SubmitBitton>
            </div>
          </LogForm>
        </div>
      </MainDiv>
    );
  }
}

export default LogIn;
