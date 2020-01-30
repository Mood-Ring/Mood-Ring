/****************************\
*                            *
*  Footer: Our Git     *
*  Hub handles that display  *
*  on the bottom of the page *
*                            *
\****************************/

import React, { Component } from 'react';
// import { Component } from 'react';
import styled from 'styled-components';

//Link styling
const Link = styled.a`
  display: inline-block;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  opacity: 0.8;
  padding: 20px;
  text-decoration: none;
  color: rgb(208, 209, 236);
`;

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="linksDiv">
        <h1 style={{ textAlign: 'center' }}>Made By: </h1>
        <Link href="https://github.com/nabramow" target="_blank">@Nabramow</Link>
        <Link href="https://github.com/sarapowers" target="_blank">@Sarapowers</Link>
        <Link href="https://github.com/mitchelsevere" target="_blank">@Mitchelsevere</Link>
        <Link href="https://github.com/natattackvick" target="_blank">@Natattackvick</Link>
      </div>
    );
  }
}

export default Footer;
