/***************************\
*                           *
*  Log In: The Log in Page! *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled  from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';

//The main body styling 
const MainDiv = styled.div`
    width: 100%;
    height: 500px;
    border: solid;
    margin-top: 10px;

`;

//The log in form styling
const LogForm = styled.form`
    border: solid;
    width: 50%;
    height: 300px;
    margin-left: 400px;
`;

//Submit button styling
const SubmitBitton = styled.button`
    margin-left: 70px;
    text-decoration: none;
    border-radius: 20px;
    color: black;
    font-size: 20px;
    &:focus{
        outline: none;
    }
`;

const WrongMessage = styled.p`
    color: red;
`;

const mapStateToProps = (reduxState) => {
    //used to bring in the pieces of state that the components on this page will use
    return {
      username: reduxState.username, 
      password: reduxState.password, 
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
      changePage: (index) => {
        dispatch(actions.changePage(index));
      }
    };
  };

class LogIn extends Component{
    constructor(props){
        super(props);

        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFormClick = this.onFormClick.bind(this);

        this.state = {
           wrong: false
        }
    }

    onUserNameChange(){
        const value = document.getElementById('username').value;
        this.props.setUsername(value);
    }

    onPasswordChange(){
        const value = document.getElementById('password').value;
        this.props.setPassword(value);
    }
    //"User name or password is wrong"
    onFormClick(e){
        e.preventDefault();
        const user = {
            username: this.props.username,
            password: this.props.password
        };
        fetch("/login",
            {method: "POST",
             headers: {
              "Content-Type": "application/json"
              },
               body: JSON.stringify(user)
              })
            .then((response) => response.json())
            .then((res) =>{
             if(res.username == "Username or password is wrong"){
                 this.setState({
                     wrong: true
                 });
             }
             else{
                this.props.addUser();
                this.props.changePage(2);
             }
            })
    }

    render(){
        let wrong = [];
        if(this.state.wrong){
            wrong = [<br></br>, <WrongMessage>User name or password is wrong</WrongMessage>];
        }
        return(
            <MainDiv>
                <h1 style = {{textAlign: 'center'}}>Log In</h1>
                <LogForm id = "logForm">
                    <div style = {{marginLeft: '350px', marginTop: '70px'}}>
                        <label for = "username">Username: </label> 
                        <input id = "username" type = "text" onChange = {this.onUserNameChange}></input>
                        <br></br>
                        <br></br>
                        <label for = "password">Password: </label> 
                        <input id = "password" type = "password" onChange = {this.onPasswordChange}></input>
                        <br></br>
                        <br></br>
                        <SubmitBitton onClick = {this.onFormClick}>Submit</SubmitBitton>
                        {wrong}
                    </div>
                    <hr></hr>
                    <h1>OAuth goes here</h1>
                </LogForm>
            </MainDiv>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);