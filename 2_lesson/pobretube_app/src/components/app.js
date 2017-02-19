
import React, { Component } from "react";
import Axios from "axios";

import SearchBar from "./search-bar";
import VideoList from "./video-list";
import YoutubePlayer from "./youtube-player"

const key = "AIzaSyAj498PNpgd2uY-WnRUZxr4t-vfLUQPq9U";

const api = "https://www.googleapis.com/youtube/v3/search";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

  }

  search(term){
    let url = api+"?part=snippet&key=AIzaSyAj498PNpgd2uY-WnRUZxr4t-vfLUQPq9U&q="+encodeURIComponent(term)+"&type=video";
    var self = this;
    Axios.get(url).then(function(result){
      console.log("++++++++++++++++++++");
      console.log(result.data.items);
      let videosFiltered = result.data.items.map(element => {
        let snippet = element.snippet;
        let video = {
          id: element.id.videoId,
          title: snippet.title,
          description: snippet.description,
          thumbnailSrc: snippet.thumbnails.default.url
        };
        return video;
      });
      console.log(videosFiltered)
      self.setState({videos: videosFiltered});
    });
  }

  selectVideo(idVideo){
    console.log(idVideo);
    this.setState({selectedVideo: idVideo});
  };

  render(){
    return (
      <div>
        <SearchBar search={this.search.bind(this)} />
        <div className="row">
          <div className="col-md-6">
            <YoutubePlayer id={this.state.selectedVideo} />
          </div>
          <div className="col-md-6">
            <VideoList videos={this.state.videos}
                       selectVideo={this.selectVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

}

const videos = [
  {title : "movie 1", thumbnailSrc: ""}
];

export default App;
