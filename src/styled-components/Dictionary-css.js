import styled from "styled-components";

export const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25em;
  margin-left: 5px;
  text-align: left;
  font-size: 1.5vh;
   @media (min-width: 360px) {
    font-size: 1.5vh;
  }
  @media (min-width: 540px) {
    font-size: 2.5vh;
    margin-bottom: 10px;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const StyledCol = styled.div`
  margin: 0 auto;
`;

export const StyledRow = styled.div`
  margin-top: 15px;
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  width: 100%;
`;

export const StyledForm = styled.form`
  padding: 20px 10px;
  margin-bottom: -20px;
  text-align: left;
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.examples};
  padding: 0 10px;
  margin-left: 6px;
  font-style: italic;
  font-size: 1vh;
  @media (min-width: 480px) {
    font-size: 1.5vh;
  }
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  width: 80%;
  padding: 5px;
  background-color: ${({ theme }) => theme.background};
  font-size: 1.5vh;
  @media (min-width: 480px) {
    font-size: 2vh;
    padding: 7px;
  }
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.primaryColor}; 
  width: 10%;
  @media (min-width: 660px) {
    padding: 7px 7px;
  }
`;

export const StyledImage = styled.img`
  width: 8px;
  heigth: 8px;
  @media (min-width: 660px) {
    width: 18px;
    height: 18px;
  }
`;
