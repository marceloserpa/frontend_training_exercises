
import React from "react";

const YOUTUBE_ADDRESS = "https://www.youtube.com/embed/";


const YoutubePlayer = props => {
    if(props.id == null || props.id == undefined){
      return (
        <div className="row">
          <div className="col-md-12">
            <p>:)</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-12">
            <iframe width="420" height="315"src={YOUTUBE_ADDRESS + props.id}>
            </iframe>
          </div>
        </div>
      );  
    }
};

export default YoutubePlayer;
