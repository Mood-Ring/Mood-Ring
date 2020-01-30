import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// Styling for the whole header
const MainDiv = styled.div`
  font-family: 'Assistant', sans-serif;
  text-align: right;
`;

// Styling for the 'Mood-Ring' title
const TitleText = styled.p`
  text-align: center;
  margin: 2px;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
  font-size: 80px;
`;

// Styling for the Log In button
const LoginButton = styled.button`
  text-decoration: none;
  font-family: 'Assistant', sans-serif;
  border-radius: 20px;
  font-size: 20px;
  margin: 3px;
  color: black;
  &:focus {
    outline: none;
  }
`;

class Header extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      !loggedIn ? (
        <nav className="header">
          <Link className="button" to="/register">Register</Link>
          <Link className="button" to="/login">Login</Link>
        </nav>
        ) : (
        <nav className="header">
          <Link className="button" to="/logout" onClick={this.props.onLogout}>Logout</Link>
        </nav>
        )
    )
  }
}

export default Header;
