import styled from "styled-components";
import { colors } from "@/utils";

export const HomePageContainer = styled.div`
  padding: 4rem 0;
`;

export const HomePageSection = styled.div`
  width: 100%;
  padding: 2rem 16rem;
  border-radius: 0.8rem;
  margin-top: 4rem;
  &:first-child {
    margin-top: 0;
  }
  @media screen and (max-width: 1200px) {
    padding: 2rem 8rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const HomePageHeading = styled.h1`
  font-size: 3.6rem;
  color: ${colors.black};

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
    text-align: center;
  }
`;

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4rem;
  margin: 2.4rem 0 3.2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.6rem;
`;
