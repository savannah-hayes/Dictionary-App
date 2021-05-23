import styled from "styled-components";

export const Section = styled.span`
  position: relative;
  top: -5px;
  margin-left: 3px;
  @media (max-width: 375px) {
    font-size: 0.8em;
    margin: 0;
  }
  @media (max-width: 320px) {
    font-size: 0.78em;
  }
  @media (max-width: 280px) {
    font-size: 0.5em;
  }
  @media (max-width: 240px) {
    display: inline-block;
    margin-top: 5px;
  } ;
`;
