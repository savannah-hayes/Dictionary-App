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
  font-size: 1vh;
  @media (min-width: 360px) {
   font-size: 1.5vh;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const StyledUnorderedList = styled.ul`
  position: relative;
  margin-top: -47px;
  margin-left: 70px;
`;

export const StyledList = styled.li`
  color: ${({ theme }) => theme.synonyms};
  display: inline-block;
  margin-left: 5px;
  font-size: 1.5vh;
  @media (min-width: 600px) {
   font-size: 2vh;
   margin-left: 15px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 15px;
`;
