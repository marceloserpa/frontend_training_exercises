
import React from "react";

const VideoListItem = props => {
    return (
      <li className="item-list list-group-item clickable" onClick={event => props.selectVideo(props.id)} >
        <div className="row">
          <div className="col-md-3">
            <img src={props.thumbnail} />
          </div>
          <div className="col-md-9">
            <b>{props.title}</b>
            <p>{props.description}</p>
          </div>
        </div>
      </li>
    );
};

export default VideoListItem;
