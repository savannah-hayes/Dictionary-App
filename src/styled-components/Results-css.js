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
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  margin-top: 5px;
  padding: 20px 15px;
  border: 2px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
`;
