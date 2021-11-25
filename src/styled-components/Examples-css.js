import styled from "styled-components";

export const Paragraph = styled.p`
  text-align: left;
  margin-left: 30px;
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.5vh;
  @media (min-width: 360px) {
    font-size: 1.8vh;
  }
`;
