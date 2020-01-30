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

//The log in form styling
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

class Login extends Component {
  render() {
    return (
      <form className="login" onSubmit={this.props.onLogin}>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button>Log In</button>
      </form>
    );
  }
}

export default Login;
