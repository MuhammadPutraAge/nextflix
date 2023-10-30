import styled from "styled-components";
import { colors } from "@/utils";

export const MovieDetailsBackContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-top: 3.2rem;
`;

export const MovieDetailsBackIconContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  box-shadow: 0 0 8px ${colors.transparentBlack};
`;

export const MovieDetailsBackIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  @media screen and (max-width: 600px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const MovieDetailsBackTitle = styled.p`
  margin-left: 1.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.black};
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MovieDetailsPageContainer = styled.div`
  width: 100%;
  padding: 4rem 16rem;
  display: flex;
  border-radius: 0.8rem;

  @media screen and (max-width: 1200px) {
    padding: 4rem 8rem;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 4rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const MoviePosterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 3.2rem 0;
  }
`;

export const MoviePoster = styled.img`
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const MovieDetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 3.2rem;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  color: ${colors.black};
  text-transform: uppercase;
  margin-bottom: 0.2rem;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const MovieMetadata = styled.p`
  font-size: 1.6rem;
  color: ${colors.grey};
  margin-bottom: 1.4rem;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }
`;

export const MovieRatingBox = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;

export const MovieRatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const MovieRating = styled.p`
  font-size: 2rem;
  color: ${colors.purple};
  margin: 0 3.2rem 0 1.4rem;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const MovieVotes = styled.p`
  font-size: 1.8rem;
  color: ${colors.grey};

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MovieCastContainer = styled.div`
  margin-top: 3.2rem;
`;

export const MovieSectionTitle = styled.h2`
  font-size: 2rem;
  color: ${colors.black};
  text-transform: uppercase;
  margin-bottom: 0.4rem;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0;
  }
`;

export const MovieCastList = styled.div`
  display: flex;
`;

export const MovieCastName = styled.p`
  font-size: 1.6rem;
  color: ${colors.grey};
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const MovieSynopsisContainer = styled.div`
  margin-top: 3.2rem;
`;

export const MovieSynopsis = styled.p`
  font-size: 1.6rem;
  color: ${colors.grey};
  text-align: justify;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
