import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { Section } from "../styled-components/Phonetic-css";

function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  const playSound = (audioFile) => {
    audioFile.play();
  };
  return (
    <Section>
      <VolumeUpIcon
        className="icon"
        fontSize="large"
        style={{ color: "rgb(120, 155, 177)" }}
        onClick={() => playSound(audio)}
      ></VolumeUpIcon>
      <span className="phoneticText"> {props.phonetic.text} </span>
    </Section>
  );
}

export default Phonetic;
