import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

import {
  StyledRow,
  StyledCol,
  StyledTitle,
  Section,
} from "../styled-components/Results-css";

function Results(props) {
  if (props.results) {
    return (
      <StyledRow>
        <StyledCol>
          <Section>
            <StyledTitle>{props.results.word} </StyledTitle>
            {props.results.phonetics.map((phonetic, index) => {
              return (
                <span key={index}>
                  <Phonetic phonetic={phonetic} />
                </span>
              );
            })}
          </Section>
        </StyledCol>
        <StyledCol>
          {props.results.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </StyledCol>
      </StyledRow>
    );
  } else {
    return null;
  }
}

export default Results;
