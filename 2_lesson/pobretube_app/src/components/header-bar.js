
import React from "react";

import SearchBar from "./search-bar"

const HeaderBar = props => {
    return (
      <div className="row">
        <div className="col-md-2">
          <h1 id="title-site">
            <span className="title-site-first">Pobre</span>
            <span className="title-site-second">Tube</span>
          </h1>
        </div>
        <div className="col-md-8">
          <SearchBar search={props.search} />
        </div>
      </div>
    );
};

export default HeaderBar;
