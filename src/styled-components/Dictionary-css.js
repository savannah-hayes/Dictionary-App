import styled from "styled-components";

export const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25em;
  margin-bottom: 10px;
  margin-left: 5px;
  text-align: left;
  @media (max-width: 480px) {
    font-size: 1em;
  }
  @media (max-width: 411px) {
    font-size: 0.98em;
  }
  @media (max-width: 360px) {
    font-size: 0.8em;
    margin-bottom: 10px;
    margin-left: 0px;
  }
  @media (max-width: 320px) {
    font-size: 0.86em;
    margin-bottom: 5px;
  }
  @media (max-width: 280px) {
    font-size: 0.75em;
  }
  @media (max-width: 240px) {
    font-size: 0.59em;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  @media (max-width: 360px) {
    padding: 0;
  }
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
  @media (max-width: 375px) {
    padding: 18px 5px;
  }
  @media (max-width: 320px) {
    padding: 17px 5px;
  }
  @media (max-width: 280px) {
    padding: 15px 5px;
  }
  @media (max-width: 240px) {
    padding: 10px 5px;
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.examples};
  padding: 0 10px;
  margin-left: 6px;
  font-size: 0.8em;
  font-style: italic;
  @media (max-width: 480px) {
    font-size: 0.66em;
  }
  @media (max-width: 414px) {
    font-size: 0.62em;
    position: relative;
    top: 9px;
    margin-left: 4px;
    margin-bottom: 22px;
  }
  @media (max-width: 375px) {
    font-size: 0.6em;
    position: relative;
    top: 5px;
    margin-left: -1px;
    margin-bottom: 22px;
  }
  @media (max-width: 320px) {
    font-size: 0.5em;
    top: 8px;
    margin-left: -3px;
  }
  @media (max-width: 280px) {
    font-size: 0.39em;
    top: 15px;
  }
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  width: 80%;
  padding: 7px;
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 375px) {
    width: 80%;
    padding: 6px;
    font-size: 0.85em;
    position: relative;
  }
  @media (max-width: 320px) {
    padding: 5px;
    font-size: 0.79em;
  }
  @media (max-width: 240px) {
    width: 100%;
    padding: 0px;
    font-size: 0.7em;
  } ;
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 7px 10px;
  margin-left: 10px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.primaryColor};
  width: 15%;
  @media (max-width: 540px) {
    padding: 6px 8px;
    width: 12%;
  }
  @media (max-width: 414px) {
    padding: 3px 7px;
    width: 15%;
  }
  @media (max-width: 320px) {
    padding: 0;
  }
  @media (max-width: 280px) {
    padding: 0px 1px;
  }
  @media (max-width: 240px) {
    display: none;
  }
`;

export const StyledImage = styled.img`
  width: 22px;
  heigth: 22px;
  @media (max-width: 540px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 375px) {
    width: 16px;
    height: 16px;
  }
  @media (max-width: 320px) {
    width: 12px;
    height: 12px;
  }
  @media (max-width: 280px) {
    width: 10px;
    height: 10px;
  }
  @media (max-width: 240px) {
    width: 9px;
    height: 9px;
  } ;
`;
