
import React, { Component } from "react";
import VideoListItem from "./video-list-item";


class VideoList extends Component {

  constructor(props){
    super(props);
  }

  build(){
    return this.props.videos.map(element => <VideoListItem title={element.title}></VideoListItem>);
  }

  render(){
    return (<div className="list-group" >{this.build()}</div>);
  }

}

export default VideoList;
