import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 80%;
  margin: 0 auto;
  @media (max-width: 425px) {
    max-width: 100%;
    @media (min-width: 1025px) {
      max-width: 75%;
    }
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.secondaryColor};
  text-decoration: none;
`;

export const StyledFooter = styled.footer` {
  text-align: center;
  margin-bottom: 20px;
`;
