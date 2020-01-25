/***************************\
*                           *
*  Main Header: The header  *
*  for every page on the    *
*  site.                    *
*                           *
\***************************/

import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

//Styling for the whole header
const MainDiv = styled.div`
    width: 100%;
    border-style: solid;
    font-family: georgia;
    text-align: center;
`;

//Styling for the 'Mood-Ring' title
const TitleText = styled.p`
    margin: 2px;
    font-weight: bold;
    font-size: 30px;
`;

//Styling for the Log In button
const LoginButton = styled.button`
    text-decoration: none;
    border-radius: 20px;
    color: black;
    font-size: 20px;
    margin: 3px;
    &:focus{
        outline: none;
    }
`;

class MainHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <MainDiv>
                <TitleText>Mood-Ring</TitleText>
                <LoginButton href = "">Log In</LoginButton>
            </MainDiv>
        )
    }
}

export default MainHeader;