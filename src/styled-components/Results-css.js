import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px -15px;
`;

export const StyledCol = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 15px;
`;

export const StyledTitle = styled.h1`
  font-size: 2.2em;
  font-weight: 600;
  display: inline;
  text-align: center;
  @media (max-width: 320px) {
    font-size: 1.9em;
    font-weight: 500;
  }
  @media (max-width: 280px) {
    font-size: 1.8em;
  }
  @media (max-width: 240px) {
    font-size: 1.7em;
  }
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  margin-top: 5px;
  padding: 20px 15px;
  border: 2px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  @media (max-width: 320px) {
    padding: 15px 15px;
  }
  @media (max-width: 280px) {
    padding: 10px 15px;
  }
`;
