import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          Synonyms:{" "}
          {props.synonyms.map((synonyms, index) => {
            if (index < 6) {
              return <li key={index}>{synonyms}</li>;
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
