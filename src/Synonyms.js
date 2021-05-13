import React from "react";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonym:</strong>
        {props.synonyms.map((synonyms, index) => {
          return <span key={index}>{synonyms}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
