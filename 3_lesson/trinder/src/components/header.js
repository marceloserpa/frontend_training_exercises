
import React, {Component} from 'react';

const Header = props => {
  return (
    <div className="row">
      <div className="col-md-2">
        <h1 id="title">
          <span className="logo">Trinder</span>
        </h1>
      </div>
      <div className="col-md-8">
        <p>nav bar </p>
      </div>
    </div>
  );
};

export default Header;
