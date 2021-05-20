import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const StyledCol = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.toggleBtn.background};;
  border: 2px solid black;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 auto;
   padding: 3px 0;
  position: relative;
  width: 50px;
  margin: 20px 10px;
  }
`;

export const StyledHeader = styled.h1`
  font-weight: 600;
  font-size: 2.8em;
  @media (max-width: 778px) {
    font-size: 2.2em;
  } ;
`;

export const StyledSymbols = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  display: inline;
  font-size: 1.4em;
  position: relative;
  top: 5px;
`;

export const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
`;

export const StyledFooter = styled.footer` {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;
