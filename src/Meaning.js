import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <strong>Definition:</strong>
            <p>{definition.definition}</p>
            <strong>Example:</strong>
            <p>
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;