import styled from "styled-components";

export const StyledRow = styled.div``;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  margin-top: -20px;
  padding: 15px 0;
  padding-bottom: 0px;
  border: 2px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  @media (max-width: 480px) {
    padding: 10px 0px;
  }
  @media (max-width: 240px) {
    padding: 10px 5px;
  }
`;

export const StyledContainer = styled.div`
  padding: 0 10px;
`;

export const StyledImage = styled.img`
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.photo.border};
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;
