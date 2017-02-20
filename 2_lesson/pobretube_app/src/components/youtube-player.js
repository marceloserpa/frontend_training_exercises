
import React from "react";

const YOUTUBE_ADDRESS = "https://www.youtube.com/embed/";

const YoutubePlayer = props => {
    if(useDefaultPlayer(props.id)){
      return buildDefaultPlayer();
    } else {
      return buildPlayer(props.id);
    }
};

const useDefaultPlayer = (idVideo) => {
  return idVideo == null || idVideo == undefined;
}

const buildDefaultPlayer = () => {
  return (
    <div className="row youtube-player">
      <div className="col-md-12">
        <p>:)</p>
      </div>
    </div>
  );
};

const buildPlayer = (idVideo) => {
  return (
    <div className="row youtube-player">
      <div className="col-md-12">
        <iframe src={YOUTUBE_ADDRESS + idVideo}
                frameBorder='0'
                height="600"
                width="800" />
      </div>
    </div>
  );
};

export default YoutubePlayer;
