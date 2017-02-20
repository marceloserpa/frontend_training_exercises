
import React, { Component } from "react";
import Axios from "axios";

import HeaderBar from "./header-bar"
import SearchBar from "./search-bar";
import VideoList from "./video-list";
import YoutubePlayer from "./youtube-player"

const YOUTUBE_API_KEY = "AIzaSyAj498PNpgd2uY-WnRUZxr4t-vfLUQPq9U";

const YOUTUBE_API_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

  }

  search(term){
    let url = urlBuilder(term);
    let self = this;
    Axios.get(url).then(result => {
      console.log(result.data.items);
      let videosFiltered = result.data.items.map(element => {
        let snippet = element.snippet;
        let video = {
          id: element.id.videoId,
          title: snippet.title,
          channelTitle: snippet.channelTitle,
          publishedAt: snippet.publishedAt,
          thumbnailSrc: snippet.thumbnails.default.url
        };
        return video;
      });
      console.log(videosFiltered)
      self.setState({videos: videosFiltered});
    });
  }

  selectVideo(idVideo){
    this.setState({selectedVideo: idVideo});
  };

  render(){
    return (
      <div>
        <HeaderBar search={this.search.bind(this)} />
        <div className="row video-area">
          <div className="col-md-8">
            <YoutubePlayer id={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <VideoList videos={this.state.videos}
                       selectVideo={this.selectVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

}

const urlBuilder = (term) => {
  return `${YOUTUBE_API_SEARCH_URL}?part=snippet&key=${YOUTUBE_API_KEY}&q=${encodeURIComponent(term)}&type=video`;
}

export default App;
