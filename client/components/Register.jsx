import React, { Component } from 'react';

import styled from 'styled-components';

//The main body styling
const MainDiv = styled.div`
  text-align: center;
  width: 80%;
  height: 650px;
  margin-top: 10px;
  font-family: 'Assistant', sans-serif;
`;

//The sign up form styling
const AuthForm = styled.form`
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

class Register extends Component {
  render() {
    return (
      <MainDiv>
        <form className="authForm" onSubmit={ this.props.onRegister }>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <button>Register</button>
        </form>
      </MainDiv>
    )
  }
}

export default Register;
