import styled from "styled-components";

export const StyledRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 15px;
  padding-top: 25px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
`;

export const StyledContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;

export const StyledImage = styled.img`
  margin-bottom: 20px;
`;
