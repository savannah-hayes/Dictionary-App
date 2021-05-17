import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Phonetic(props) {
  return (
    <div className="Phonetic">
      <p>{props.phonetic.text}</p>
      <ReactAudioPlayer src={props.phonetic.audio} autoPlay={false} controls />
    </div>
  );
}

export default Phonetic;
