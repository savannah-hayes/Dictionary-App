import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetic.css";

function Phonetic(props) {
  return (
    <div className="Phonetic">
      <p>{props.phonetic.text}</p>
      <ReactAudioPlayer src={props.phonetic.audio} autoPlay={false} controls />
    </div>
  );
}

export default Phonetic;
