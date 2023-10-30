"use client";

import { Loading } from "@/components";
import { useAppDispatch, useAppSelector } from "@/redux";
import { getMovieByID } from "@/redux/movie/movieActions";
import { Container } from "@/styles/GlobalStyles";
import StarRatings from "react-star-ratings";
import {
  MovieCastContainer,
  MovieCastList,
  MovieCastName,
  MovieDetailsBackContainer,
  MovieDetailsBackIcon,
  MovieDetailsBackIconContainer,
  MovieDetailsBackTitle,
  MovieDetailsContainer,
  MovieDetailsPageContainer,
  MovieMetadata,
  MoviePoster,
  MoviePosterContainer,
  MovieRating,
  MovieRatingBox,
  MovieRatingContainer,
  MovieSectionTitle,
  MovieSynopsis,
  MovieSynopsisContainer,
  MovieTitle,
  MovieVotes,
} from "@/styles/MovieDetailsPageStyles";
import { colors } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface MovieDetailProps {
  params: { movieId: string };
}

export default function MovieDetail({ params }: MovieDetailProps) {
  const { movieId } = params;

  const router = useRouter();

  const dispatch = useAppDispatch();

  const { loading, data, error } = useAppSelector((state) => state.movie);

  useEffect(() => {
    if (!data || (data && data.imdbID !== movieId)) {
      if (movieId) {
        dispatch(getMovieByID({ i: movieId }));
      }
    }
  }, [data, dispatch, movieId]);

  if (!loading && error) {
    return null;
  }

  if (loading || !data) {
    return <Loading data-testid="loading" />;
  }

  return (
    <Container>
      {/* Back Button */}
      <MovieDetailsBackContainer data-testid="back-btn">
        <MovieDetailsBackIconContainer onClick={() => router.push("/")}>
          <MovieDetailsBackIcon
            src="/icons/ic-arrow-left.svg"
            alt="Back to Previous Page"
          />
        </MovieDetailsBackIconContainer>
        <MovieDetailsBackTitle>Back to Previous Page</MovieDetailsBackTitle>
      </MovieDetailsBackContainer>

      <MovieDetailsPageContainer>
        <MoviePosterContainer>
          <MoviePoster src={data.Poster} alt={data.Title} />
        </MoviePosterContainer>

        <MovieDetailsContainer>
          <MovieTitle>{data.Title}</MovieTitle>

          <MovieMetadata>
            {data.Rated} / {data.Country} / {data.Language} / {data.Year} /{" "}
            {data.Runtime}
          </MovieMetadata>

          <MovieRatingBox>
            <MovieRatingContainer>
              <StarRatings
                rating={(parseFloat(data.imdbRating) / 10) * 5}
                numberOfStars={5}
                starEmptyColor={colors.grey}
                starRatedColor={colors.purple}
                starDimension="20px"
                starSpacing="2px"
              />
              <MovieRating>{data.imdbRating}</MovieRating>
            </MovieRatingContainer>
            <MovieVotes>{data.imdbVotes} Votes</MovieVotes>
          </MovieRatingBox>

          <MovieCastContainer>
            <MovieSectionTitle>THE CAST</MovieSectionTitle>
            <MovieCastList>
              <MovieCastName>{data.Actors}</MovieCastName>
            </MovieCastList>
          </MovieCastContainer>

          <MovieSynopsisContainer>
            <MovieSectionTitle>SYNOPSIS</MovieSectionTitle>
            <MovieSynopsis>{data.Plot}</MovieSynopsis>
          </MovieSynopsisContainer>
        </MovieDetailsContainer>
      </MovieDetailsPageContainer>
    </Container>
  );
}
