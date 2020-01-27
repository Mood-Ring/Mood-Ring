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
  }

  render() {
    return (
      <MainDiv>
        <h1>How are you feeling today {this.props.currentUser}?</h1>
        <SelectStyle>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Frustrated">Frustrated</option>
          <option value="Tired">Tired</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Tense">Tense</option>
          <option value="Excited">Excited</option>
          <option value="Distracted">Distracted</option>
        </SelectStyle>
        <br></br>
        <SubmitBitton>Submit</SubmitBitton>
      </MainDiv>
    );
  }
}

connect(mapStateToProps)(Feeling);
export default Feeling;
