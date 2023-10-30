"use client";

import { Modal, MovieItem } from "@/components";
import { useAppDispatch, useAppSelector } from "@/redux";
import { getMovies } from "@/redux/movie/movieActions";
import { Container, NotFoundText } from "@/styles/GlobalStyles";
import {
  HomePageContainer,
  HomePageHeading,
  HomePageSection,
  LoaderContainer,
  MovieListContainer,
} from "@/styles/HomePageStyles";
import { colors } from "@/utils";
import { MouseEvent, useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

export default function Home() {
  const dispatch = useAppDispatch();

  const { loading, search, page, list, error } = useAppSelector(
    (state) => state.movie
  );

  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  useEffect(() => {
    if (list.length === 0) {
      dispatch(getMovies({ s: search, page: 1 }));
    }
    
    window.onscroll = () => {
      if (window.location.pathname === "/") {
        const { scrollTop, offsetHeight } = document.documentElement;

        if (
          window.innerHeight + Math.floor(scrollTop) === offsetHeight ||
          window.innerHeight + Math.floor(scrollTop) === offsetHeight - 1
        ) {
          if (!error) {
            dispatch(getMovies({ s: search, page: page + 1 }));
          }
        }
      }
    };
  }, [dispatch, error, list.length, page, search]);

  const handlePosterClick = (e: MouseEvent<HTMLImageElement>, src: string) => {
    e.stopPropagation();

    setModalSrc(src === "N/A" ? "/images/null-poster.jpg" : src);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalSrc("");
    setShowModal(false);
  };

  return (
    <main>
      <HomePageContainer>
        <Container>
          <HomePageSection>
            {/* Heading */}
            <HomePageHeading data-testid="heading">Movie List</HomePageHeading>

            {/* Movie List */}
            {list.length > 0 && (
              <MovieListContainer data-testid="movie-list">
                {list.map((movie) => (
                  <MovieItem
                    key={movie.imdbID}
                    movie={movie}
                    onPosterClick={(e) => handlePosterClick(e, movie.Poster)}
                  />
                ))}
              </MovieListContainer>
            )}

            {loading && (
              <LoaderContainer data-testid="loading-indicator">
                <ScaleLoader color={colors.black} />
              </LoaderContainer>
            )}

            {list.length === 0 && error && (
              <NotFoundText>Movie Not Found</NotFoundText>
            )}
          </HomePageSection>
        </Container>
      </HomePageContainer>

      {showModal && <Modal src={modalSrc} onClose={handleCloseModal} />}
    </main>
  );
}
