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
  background-color: ${({ theme }) => theme.toggleBtn.background};
  border: 2px solid #789bb1;
  border-radius: 30px;
  padding: 5px 0;
  cursor: pointer;
  position: relative;
  width: 126px;
  margin: 20px;
  }
`;

export const StyledText = styled.span`
  position: relative;
  margin-left: 7px;
  margin-right: 5px;
  top: 2px;
`;

export const StyledIcon = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50px;
  border: 2px solid #789bb1;
  display: inline;
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

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
`;

export const StyledFooter = styled.footer` {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;
