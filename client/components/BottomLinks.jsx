/****************************\
*                            *
*  Bottom Links: Our Git     *
*  Hub handles that display  *
*  on the bottom of the page *
*                            *
\****************************/

import React from 'react';
import { Component } from 'react';
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

class BottomLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="linksDiv">
        <h1 style={{ textAlign: 'center' }}>Made By: </h1>
        <Link href="https://github.com/chelseyeslehc" target="_blank">
          @chelseyeslehc
        </Link>
        <Link href="https://github.com/Jonathon55" target="_blank">
          @Jonathon55
        </Link>
        <Link href="https://github.com/Jnaso29" target="_blank">
          @Jnaso29
        </Link>
        <Link href="https://github.com/Vchau511" target="_blank">
          @Vchau511
        </Link>
      </div>
    );
  }
}

export default BottomLinks;
