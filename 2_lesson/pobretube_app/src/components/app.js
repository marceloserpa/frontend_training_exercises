
import React, { Component } from "react";
import Axios from "axios";

import SearchBar from "./search-bar";

const key = "AIzaSyAj498PNpgd2uY-WnRUZxr4t-vfLUQPq9U";

const api = "https://www.googleapis.com/youtube/v3/search";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      list
    };

  }

  search(term){
    console.log(term)
    let url = api+"?part=snippet&key=AIzaSyAj498PNpgd2uY-WnRUZxr4t-vfLUQPq9U&q="+term;
    console.log(url)
    Axios.get(url).then(function(result){
      console.log(result);
    });
    this.setState({list: []});
  }

  render(){
    return (
      <div>
        <SearchBar search={this.search.bind(this)} />
      </div>
    );
  }

}

const list = [];

export default App;
