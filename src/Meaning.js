import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        let formattedIndex = ++index;
        return (
          <div key={index}>
            <p>
              <strong>
                {formattedIndex}. {definition.definition}
              </strong>
            </p>
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
