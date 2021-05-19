import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <span className="word">{props.results.word} </span>
          {props.results.phonetics.map((phonetic, index) => {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
