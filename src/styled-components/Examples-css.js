import styled from "styled-components";

export const Paragraph = styled.p`
  text-align: left;
  margin-left: 30px;
  opacity: 0.8;
  @media (max-width: 320px) {
    margin: 0;
    margin-top: 10px;
  }
  @media (max-width: 280px) {
    font-size: 0.9em;
  }
  @media (max-width: 240px) {
    font-size: 0.8em;
  } ;
`;
