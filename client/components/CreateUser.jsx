/***************************\
*                           *
*  Create User: Page to     *
*  create a new account     *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';

//The main body styling
const MainDiv = styled.div`
  font-family: 'Assistant', sans-serif;
  text-align: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

//The sign up form styling
const CreateForm = styled.form`
  font-family: 'Assistant', sans-serif;
  width: 100%;
  height: 600px;
`;

//Submit button styling
const SubmitBitton = styled.button`
  margin: auto;
  font-family: 'Assistant', sans-serif;
  text-decoration: none;
  border-radius: 20px;
  font-size: 17px;
  color: black;
  &:focus {
    outline: none;
  }
`;

const mapStateToProps = (reduxState) => {
  //used to bring in the pieces of state that the components on this page will use
  return {
    username: reduxState.username,
    password: reduxState.password,
    currentUser: reduxState.currentUser
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
      changePage: (index) => {
        dispatch(actions.changePage(index));
      }
    };
};

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormClick = this.onFormClick.bind(this);
  }

  onUserNameChange() {
    const value = document.getElementById('username').value;
    this.props.setUsername(value);
  }

  onPasswordChange() {
    const value = document.getElementById('password').value;
    this.props.setPassword(value);
  }

    onFormClick(e){
        e.preventDefault();
        this.props.addUser();
        const user ={
            username: this.props.username,
            password: this.props.password
        }
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }); 
        this.props.changePage(2);
    }
  render() {
    return (
      <MainDiv>
        <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
        <CreateForm>
          <div className="center-form">
            <label for="username">Username: </label>
            <input
              id="username"
              type="text"
              onChange={this.onUserNameChange}
            ></input>
            <br></br>
            <label for="password">Password: </label>
            <input
              id="password"
              type="text"
              onChange={this.onPasswordChange}
            ></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

