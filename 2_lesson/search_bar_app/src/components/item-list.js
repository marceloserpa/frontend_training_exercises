
import React from "react";

const ItemList = props => {
    return (
      <li className="item-list list-group-item" >{props.id} - {props.name}</li>
    );
};

export default ItemList;
