
import React from "react";

const VideoListItem = props => {
    return (
      <li className="item-list list-group-item clickable" onClick={event => props.selectVideo(props.id)} >
        <div className="row">
          <div className="col-md-4">
            <img src={props.thumbnail} />
          </div>
          <div className="col-md-8">
            <h3 className="video-list-item-title">{props.title}</h3>
            <span className="video-list-item-channel">{props.channelTitle}</span><br />
            <span className="video-list-item-publishedAt">{props.publishedAt}</span>
          </div>
        </div>
      </li>
    );
};

export default VideoListItem;
