import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Phonetic(props) {
  return (
    <div className="Phonetic">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        autoPlay={false}
        controls={false}
      />
      <p>{props.phonetic.text}</p>
    </div>
  );
}

export default Phonetic;
