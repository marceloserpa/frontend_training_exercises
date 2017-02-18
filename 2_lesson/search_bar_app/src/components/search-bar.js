
import React from "react";

const SearchBar = props => {
    return (
      <div class="row">
        <input onChange={event => props.filter(event.target.value)} className="form-control" />
      </div>
    );
};

export default SearchBar;
