import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  const playSound = (audioFile) => {
    audioFile.play();
  };
  return (
    <span className="Phonetic">
      <VolumeUpIcon
        className="icon"
        fontSize="large"
        style={{ color: "rgb(120, 155, 177)" }}
        onClick={() => playSound(audio)}
      ></VolumeUpIcon>
      <span className="phoneticText"> {props.phonetic.text} </span>
    </span>
  );
}

export default Phonetic;
