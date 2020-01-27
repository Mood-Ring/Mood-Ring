/****************************\
*                            *
*  How are you feeling: gets *
*  user mood input and       *
*  responds to it            *
*                            *
\****************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//The main body styling
const MainDiv = styled.div`
  width: 100%;
  height: 300px;
  border: solid;
  margin-top: 10px;
  text-align: center;
`;

const Response = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  border: solid;
`;

const SelectStyle = styled.select`
  height: 100px;
  width: 200px;
  font-size: 30px;
`;

const SubmitBitton = styled.button`
  margin-top: 20px;
  text-decoration: none;
  border-radius: 20px;
  color: black;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

const mapStateToProps = (reduxState) => {
  //used to bring in the pieces of state that the components on this page will use
  return {
    currentUser: reduxState.currentUser
  };
};

class Feeling extends Component {
  constructor(props) {
    super(props);

    this.sendMood = this.sendMood.bind(this);
  }

  sendMood(){

    const value = document.getElementById("selector").value;

    const user = {
      username: this.props.username,
      mood: value
    };

    fetch('/mood', 
    { method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((data) => {
      
    })
    .catch((err) => {
      console.log("Error", err);
    })
  
  }

  render() {
    const cur = this.props.currentUser;
    return (
      <MainDiv>
        <h1>How are you feeling today {cur}?</h1>
        <SelectStyle id = "selector">
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="frustrated">Frustrated</option>
          <option value="tired">Tired</option>
          <option value="relaxed">Relaxed</option>
          <option value="tense">Anxious</option>
          <option value="excited">Excited</option>
          <option value="distracted">Distracted</option>
        </SelectStyle>
        <br></br>
        <SubmitBitton onClick = {this.sendMood}>Submit</SubmitBitton>
        {/* <Response>I'm a response</Response> */}
      </MainDiv>
    );
  }
}


export default connect(mapStateToProps, null)(Feeling);;
