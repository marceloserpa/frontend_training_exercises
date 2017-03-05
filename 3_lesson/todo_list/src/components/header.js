
import React, { Component } from 'react';

const Header = props => {
  return (
    <nav className="navbar sticky-top navbar-light bg-faded navbar-toggleable-md">
      <a className="navbar-brand" href="#">TODO-List</a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link">Home</a>
          </li>
        </ul>
    </nav>
  );
};

export default Header;
