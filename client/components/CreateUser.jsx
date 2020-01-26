/***************************\
*                           *
*  Create User: Page to     *
*  create a new account     *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled  from 'styled-components';

//The main body styling 
const MainDiv = styled.div`
    width: 100%;
    height: 500px;
    border: solid;
    margin-top: 10px;

`;

//The sign up form styling
const CreateForm = styled.form`
    border: solid;
    width: 50%;
    height: 300px;
    margin-left: 400px;
`;

//Submit button styling
const SubmitBitton = styled.button`
    margin-left: 350px;
    text-decoration: none;
    border-radius: 20px;
    color: black;
    font-size: 20px;
    &:focus{
        outline: none;
    }
`;

class CreateUser extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <MainDiv>
                <h1 style = {{textAlign: 'center'}}>Sign Up</h1>
                <CreateForm>
                    <div style = {{marginLeft: '310px', marginTop: '70px'}}>
                        <label for = "username">Username: </label> 
                        <input id = "username" type = "text"></input>
                        <br></br>
                        <br></br>
                        <label for = "password">Password: </label> 
                        <input id = "password" type = "text"></input>
                        <br></br>
                        <br></br>
                    </div>
                    <SubmitBitton>Create Account</SubmitBitton>
                    <hr></hr>
                    <h1>OAuth goes here</h1>
                </CreateForm>
            </MainDiv>
        )
    }
}

export default CreateUser;