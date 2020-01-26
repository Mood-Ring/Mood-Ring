/***************************\
*                           *
*  Log In: The Log in Page! *
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

class LogIn extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <MainDiv>
                <h1 style = {{textAlign: 'center'}}>Log In</h1>
                <LogForm>
                    <div style = {{marginLeft: '350px', marginTop: '70px'}}>
                        <label for = "username">Username: </label> 
                        <input id = "username" type = "text"></input>
                        <br></br>
                        <br></br>
                        <label for = "password">Password: </label> 
                        <input id = "password" type = "text"></input>
                        <br></br>
                        <br></br>
                        <SubmitBitton>Submit</SubmitBitton>
                    </div>
                    <hr></hr>
                    <h1>OAuth goes here</h1>
                </LogForm>
            </MainDiv>
        )
    }
}

export default LogIn;