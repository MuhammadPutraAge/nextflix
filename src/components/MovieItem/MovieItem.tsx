import { MovieListItem } from "@/types/movie";
import { MouseEvent } from "react";
import { MovieItemContainer, MovieItemContent, MovieItemPoster, MovieItemTitle, MovieItemType, MovieItemTypeContainer, MovieItemYear } from "./MovieItemStyles";
import { useRouter } from "next/navigation";

interface MovieItemProps {
  movie: MovieListItem,
  onPosterClick: (e: MouseEvent<HTMLImageElement>) => void;
}

export default function MovieItem({movie, onPosterClick}: MovieItemProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${movie.imdbID}`)
  }
  
  return (
    <>
      <MovieItemContainer onClick={handleClick}>
        <MovieItemPoster
          data-testid="poster"
          src={movie.Poster === "N/A" ? "/images/null-poster.jpg" : movie.Poster}
          alt={movie.Title}
          onClick={onPosterClick}
        />
        <MovieItemContent>
          <MovieItemTypeContainer>
            <MovieItemType data-testid="type">{movie.Type}</MovieItemType>
          </MovieItemTypeContainer>
          <MovieItemTitle data-testid="movie-title">
            {movie.Title}
          </MovieItemTitle>
          <MovieItemYear data-testid="year">{movie.Year}</MovieItemYear>
        </MovieItemContent>
      </MovieItemContainer>
    </>
  );
}