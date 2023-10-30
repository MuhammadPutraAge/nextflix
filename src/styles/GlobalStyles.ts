import styled, { createGlobalStyle } from "styled-components";
import { colors } from "@/utils";

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 12rem;
  @media screen and (max-width: 1440px) {
    padding: 0 8rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 2rem;
  }
`;

export const NotFoundText = styled.p`
  text-align: center;
  font-size: 2.4rem;
  color: ${colors.black};
  padding: 2.4rem;
`;

export default GlobalStyle;
