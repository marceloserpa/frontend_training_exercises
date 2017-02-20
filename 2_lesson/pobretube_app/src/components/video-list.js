
import React, { Component } from "react";
import VideoListItem from "./video-list-item";


class VideoList extends Component {

  constructor(props){
    super(props);
  }

  build(){
    return (
      this.props.videos.map(element =>
        <VideoListItem id={element.id}
                       title={element.title}
                       channelTitle={element.channelTitle}
                       publishedAt={element.publishedAt}
                       thumbnail={element.thumbnailSrc}
                       selectVideo={this.props.selectVideo}>
        </VideoListItem>)
    );
  }

  render(){
    return (
      <div className="video-list-area">
        <div className="row">
          <div className="col-md-12">
            <div className="list-group" >
              {this.build()}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default VideoList;
