/***************************\
*                           *
*  Landing Page Body: The   *
*  storage for the landing  *
*  page's main content.     *
*                           *
\***************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

//Styling for the whole body
const MainDiv = styled.div`
  width: 100%;
  height: 600px;
  font-family: 'Assistant', sans-serif;
  text-align: center;
  margin-top: 10px;
`;

//Styling for the daily quote
const Quote = styled.h1`
  font-style: italic;
  font-family: 'Assistant', sans-serif;
  margin-top: 80px;
`;

//Styling for the log in button
const LoginButton = styled.button`
  text-decoration: none;
  color: black;
  font-size: 20px;
  border-radius: 10px
  margin: 3px;
  width: 18%;
  height: 7%;
  &:focus {
    outline: none;
  }
`;


class LandingPageBody extends Component{
    constructor(props){
        super(props);

        this.state = {
            quote: '', 
            author: ''
         }
    }


    componentDidMount(){
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((res) => {
        let rand = Math.floor(Math.random() * 1620);
        console.log(res[rand].author);
        if(res[rand].author == null){
            this.setState({
                quote: res[rand].text, 
                author: 'Jon Gonzalez'
            });
        }
        else{
           this.setState({
               quote: res[rand].text, 
               author: res[rand].author
           });
        }
        })
    }

  render() {
    //Variable for dynamic quote fetching
    const quoteComp = <Quote>"{this.state.quote}" - {this.state.author}</Quote>

    return (
      <MainDiv>
        {quoteComp}
        <br></br>
        <LoginButton className="login-buttons">Start Today</LoginButton>
      </MainDiv>
    );
  }
}

export default LandingPageBody;
