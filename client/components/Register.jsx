/***************************\
*                           *
*  Register: Page to     *
*  create a new account     *
*                           *
\***************************/

import React, { Component } from 'react';
// import { Component } from 'react';
import styled from 'styled-components';

// import { connect } from 'react-redux';
// import * as actions from '../actions/actions.js';

//The main body styling
const MainDiv = styled.div`
  text-align: center;
  width: 80%;
  height: 650px;
  margin-top: 10px;
  font-family: 'Assistant', sans-serif;
`;

//The sign up form styling
const CreateForm = styled.form`
  clear: both;
  text-align: right;
  width: 50%;
  height: 300px;
  margin: auto;
  font-family: 'Assistant', sans-serif;
`;

//Submit button styling
const SubmitBitton = styled.button`
margin: auto;
text-decoration: none;
border-radius: 20px;
opacity: 0.6%
font-size: 20px;
&:focus {
  outline: none;
}
`;

// const mapStateToProps = (reduxState) => {
//   //used to bring in the pieces of state that the components on this page will use
//   return {
//     username: reduxState.username,
//     password: reduxState.password,
//     currentUser: reduxState.currentUser
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   //used to bring in actions that will be dispatched within the components on this page.
//   return {
//     setUsername: (userN) => {
//       dispatch(actions.setUsername(userN));
//     },
//     setPassword: (password) => {
//       dispatch(actions.setPassword(password));
//     },
//     addUser: () => {
//       dispatch(actions.addUser());
//     },
//     changePage: (index) => {
//       dispatch(actions.changePage(index));
//     }
//   };
// };

class Register extends Component {
  // constructor(props) {
  //   super(props);

  //   this.onUserNameChange = this.onUserNameChange.bind(this);
  //   this.onPasswordChange = this.onPasswordChange.bind(this);
  //   this.onFormClick = this.onFormClick.bind(this);
  // }

  onUserNameChange() {
    const value = document.getElementById('username').value;
    this.props.setUsername(value);
  }

  onPasswordChange() {
    const value = document.getElementById('password').value;
    this.props.setPassword(value);
  }

  onFormClick(e) {
    e.preventDefault();
    this.props.addUser();
    const user = {
      username: this.props.username,
      password: this.props.password
    };
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    this.props.changePage(2);
  }
  render() {
    return (
      <MainDiv>
        <CreateForm>
          <div className="center-form">
            <h1>Sign up</h1>
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
            <SubmitBitton onClick={this.onFormClick}>
              Create Account
            </SubmitBitton>
          </div>
        </CreateForm>
      </MainDiv>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
