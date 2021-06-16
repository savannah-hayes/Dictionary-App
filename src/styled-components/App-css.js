import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 80%;
  max-width: 960px;
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
  padding: 0 15px;
  text-align: center;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.toggleBtn.background};
  border: 2px solid #789bb1;
  border-radius: 30px;
  padding: 5px 0;
  cursor: pointer;
  position: relative;
  width: 130px;
  margin-top: 20px;
  margin-bottom: 10px;
  @media (max-width: 375px) {
    width: 110px;
    font-size: 0.8em;
  }
  @media (max-width: 280px) {
    width: 100px;
    font-size: 0.7em;
  }
  @media (max-width: 240px) {
    width: 86px;
    font-size: 0.6em;
    padding: 2px 0;
  } ;
`;

export const StyledText = styled.span`
  position: relative;
  margin-left: 7px;
  margin-right: 7px;
  top: 2px;
  @media (max-width: 375px) {
    margin-right: 4px;
  }
`;

export const StyledIcon = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  border: 2px solid #789bb1;
  display: inline;
  @media (max-width: 375px) {
    height: 28px;
    width: 28px;
  }
  @media (max-width: 320px) {
    height: 27px;
    width: 27px;
  }
  @media (max-width: 280px) {
    height: 25px;
    width: 25px;
  }
  @media (max-width: 240px) {
    height: 20px;
    width: 20px;
  } ;
`;

export const StyledHeader = styled.h1`
  font-weight: 600;
  font-size: 2.8em;
  @media (max-width: 778px) {
    font-size: 2.2em;
  }
  @media (max-width: 320px) {
    font-size: 2.16em;
  }
  @media (max-width: 280px) {
    font-size: 1.7em;
  }
  @media (max-width: 240px) {
    font-size: 1.5em;
  }
`;

export const StyledSymbols = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  display: inline;
  font-size: 1.4em;
  position: relative;
  top: 5px;
`;

export const StyledLink1 = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.link.text};
    text-decoration: underline;
  }
`;

export const StyledLink2 = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.link.text};
    text-decoration: underline;
  }
`;

export const StyledFooter = styled.footer`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
  @media (max-width: 414px) {
    font-size: 0.75em;
    margin-top: 15px;
  }
  @media (max-width: 384px) {
    font-size: 0.67em;
  }
  @media (max-width: 375px) {
    font-size: 0.62em;
  }
  @media (max-width: 320px) {
    font-size: 0.54em;
  }
  @media (max-width: 280px) {
    font-size: 0.45em;
  }
  @media (max-width: 240px) {
    font-size: 0.37em;
  }
`;
