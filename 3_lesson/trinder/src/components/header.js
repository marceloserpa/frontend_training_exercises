
import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = props => {
  return (
    <nav className="navbar sticky-top navbar-light bg-faded navbar-toggleable-md">
      <a className="navbar-brand" href="#">Trinder</a>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/approved" className="nav-link">Approved</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Header;
