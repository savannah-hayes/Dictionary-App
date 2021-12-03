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
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 30px;
  padding: 3px 0;
  position: relative;
  font-size: 0.75rem;
  margin-top: 20px;
  margin-bottom: 10px;
  @media (min-width: 700px) {
    font-size: 0.875rem;
    padding: 5px 0;
  }
`;

export const StyledText = styled.span`
  position: relative;
  margin: 0 7px;
  top: 2px;
`;

export const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50px;
  border: 2px solid #789bb1;
  margin-right: 5px;
  @media (min-width: 700px) {
    height: 25px;
    width: 25px;
  }
`;

export const StyledHeader = styled.h1`
  font-weight: 600;
  font-size: 6vh;
   @media (min-width: 660px) {
    font-size: 8vh;
  }
`;

export const StyledSymbols = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  display: inline;
  position: relative;
    font-size: 5vh;
  @media (min-width: 660px) {
    font-size: 8vh;
  }
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
  font-size: 1.5vh;
  @media (min-width: 660px) {
    font-size: 2vh;
  }
`;
