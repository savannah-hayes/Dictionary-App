import React, { useState } from "react";
import {
  StyledList,
  StyledUnorderedList,
  StyledButton,
  StyledRow,
  StyledContainer,
} from "../styled-components/Synonyms-css";

function Synonyms(props) {
  const [hidden, setHidden] = useState(true);
  if (props.synonyms) {
    return (
      <StyledRow>
        <StyledContainer>
          <StyledButton onClick={() => setHidden(!hidden)}>
            Synonyms
          </StyledButton>
          <span hidden={hidden}>
            <StyledUnorderedList>
              {props.synonyms.map((synonyms, index) => {
                if (index < 5) {
                  return <StyledList key={index}>{synonyms}</StyledList>;
                } else {
                  return null;
                }
              })}
            </StyledUnorderedList>
          </span>
        </StyledContainer>
      </StyledRow>
    );
  } else {
    return null;
  }
}

export default Synonyms;
