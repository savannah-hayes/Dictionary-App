import React, { useState } from "react";

function Synonyms(props) {
  const [hidden, setHidden] = useState(true);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <button onClick={() => setHidden(!hidden)}>Synonyms</button>
        <br />
        <span hidden={hidden}>
          <ul>
            {props.synonyms.map((synonyms, index) => {
              if (index < 5) {
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
