
import React, { Component } from "react";
import Axios from "axios";

import SearchBar from "./search-bar";
import VideoList from "./video-list";

const key = "AIzaSyAj498PNpgd2uY-WnRUZxr4t-vfLUQPq9U";

const api = "https://www.googleapis.com/youtube/v3/search";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: []
    };

  }

  search(term){
    let url = api+"?part=snippet&key=AIzaSyAj498PNpgd2uY-WnRUZxr4t-vfLUQPq9U&q="+term;
    var self = this;
    Axios.get(url).then(function(result){
      let videosFiltered = result.data.items.map(element => element.snippet);
      console.log(videosFiltered)
      self.setState({videos: videosFiltered});
    });

  }

  render(){
    return (
      <div>
        <SearchBar search={this.search.bind(this)} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}

const videos = [
  {title : "movie 1"}
];

export default App;
