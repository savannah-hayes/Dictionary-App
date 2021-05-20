import styled from "styled-components";

export const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25em;
  margin-bottom: 10px;
  text-align: left;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

export const StyledCol = styled.div`
  position: relative;
`;

export const StyledRow = styled.div`
  margin-top: 15px;
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  width: 100%;
`;

export const StyledForm = styled.form`
  padding: 30px;
  text-align: ;
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  width: 80%;
  padding: 7px;
  background-color: ${({ theme }) => theme.background};
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 7px 10px;
  margin-left: 10px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.primaryColor};
  width: 15%;
`;

export const StyledImage = styled.img`
  width: 22px;
  heigth: 22px;
`;
