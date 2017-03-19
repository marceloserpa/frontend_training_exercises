
import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = props => {
  return (
    <nav className="navbar sticky-top navbar-light bg-faded navbar-toggleable-md">
      <Link to="/" className="navbar-brand">Tuiter</Link>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/timeline" className="nav-link">Timeline</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">Sign In</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Header;
