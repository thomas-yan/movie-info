import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from './nav';
import logo from '../logo.svg';
import './header.css';

export class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to={'/'}><div className="header"><img src={logo} alt="movie info logo" /> <h1>Movie Info</h1></div></Link>
        <Nav />
      </header>
    );
  }
}
