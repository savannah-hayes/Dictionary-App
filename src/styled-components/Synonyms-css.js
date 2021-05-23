import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 30px;
  padding: 5px 10px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.primaryColor};
  color: #fafafa;
  font-family: "Archivo";
  margin-left: 30px;
  margin-bottom: 15px;
  @media (max-width: 320px) {
    font-size: 0.9em;
    margin-left: 0;
  }
  @media (max-width: 280px) {
    font-size: 0.8em;
  }
  @media (max-width: 240px) {
    font-size: 0.6em;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const StyledUnorderedList = styled.ul`
  position: relative;
  margin-top: -47px;
  margin-left: 80px;
  @media (max-width: 600px) {
    margin-left: 90px;
  }
  @media (max-width: 480px) {
    margin-left: -9px;
    margin-top: -5px;
  }
  @media (max-width: 320px) {
    margin-left: -37px;
    margin-top: -6px;
  }
  @media (max-width: 240px) {
    margin-left: -30px;
    margin-top: -14px;
  }
`;

export const StyledList = styled.li`
  color: ${({ theme }) => theme.synonyms};
  display: inline-block;
  margin-left: 20px;
  @media (max-width: 600px) {
    margin-left: 10px;
  }
  @media (max-width: 280px) {
    font-size: 0.89em;
    margin-left: 9px;
  }
  @media (max-width: 240px) {
    font-size: 0.6em;
    margin-left: 5px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 15px;
`;
