
import React from "react";

const SearchBar = props => {
    return (
      <div className="row search-bar">
        <input onChange={event => props.search(event.target.value)} className="form-control" />
      </div>
    );
};

export default SearchBar;
