
import React, { Component } from "react";
import ItemList from "./item-list";


class List extends Component {

  constructor(props){
    super(props);
  }

  build(){
    return this.props.itens.map(element => <ItemList name={element.name} id={element.id}></ItemList>);
  }

  render(){
    return (<div className="list-group" >{this.build()}</div>);
  }

}

export default List;
