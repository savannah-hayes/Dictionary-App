import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.3em;
  @media (max-width: 320px) {
    font-size: 1.2em;
  }
  @media (max-width: 240px) {
    font-size: 1em;
  }
`;

export const Paragraph = styled.p`
  margin-left: 15px;
   @media (max-width: 320px) {
    margin: 0;
    font-size: 1em;
  @media (max-width: 280px) {
    font-size: 0.9em;
  }
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 10px;
  padding: 20px 15px;
  margin: 20px 0;
  border: 2px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  width: 100%;
`;
