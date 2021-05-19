import React, { useState } from "react";

import "./Synonyms.css";

function Synonyms(props) {
  const [hidden, setHidden] = useState(true);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <button className="btn btn-primary" onClick={() => setHidden(!hidden)}>
          Synonyms
        </button>
        <span hidden={hidden}>
          <ul>
            {props.synonyms.map((synonyms, index) => {
              if (index < 6) {
                return <li key={index}>{synonyms}</li>;
              } else {
                return null;
              }
            })}
          </ul>
        </span>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
