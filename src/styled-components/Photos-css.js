import styled from "styled-components";

export const StyledRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  padding: 30px 10px;
  padding-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  @media (max-width: 480px) {
    margin-top: -20px;
    padding: 20px 5px;
    padding-bottom: 5px;
  }
  @media (max-width: 240px) {
    padding: 10px 5px;
  }
`;

export const StyledContainer = styled.div`
  padding: 0 15px;
`;

export const StyledImage = styled.img`
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.photo.border};
  @media (max-width: 280px) {
    width: 50px;
    height: 40px;
  }
  @media (max-width: 240px) {
    margin-bottom: 10px;
  }
`;
