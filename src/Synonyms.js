import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          <em>Synonyms: </em>
          {props.synonyms.map((synonyms, index) => {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
