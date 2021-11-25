import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5vh;
  @media (min-width: 540px) {
    font-size: 2.5vh;
  }
`;

export const Paragraph = styled.p`
  margin-left: 15px;
  font-size: 1.5vh;
  @media (min-width: 360px) {
    font-size: 2vh;
  }
`;

export const Section = styled.div`
  background: ${({ theme }) => theme.section.background};
  border-radius: 10px;
  padding: 20px 15px;
  margin: 20px 0;
  border: 2px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  width: 100%;
`;
