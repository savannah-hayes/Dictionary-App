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
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledUnorderedList = styled.ul`
  position: relative;
  margin-top: -47px;
  margin-left: 80px;
`;

export const StyledList = styled.li`
  color: ${({ theme }) => theme.synonyms};
  display: inline-block;
  margin-left: 20px;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 15px;
`;