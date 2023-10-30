export interface Rating {
  Source: string;
  Value: string;
}

export interface MovieListItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieItem {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

// Movie Slice
export interface MovieState {
  loading: boolean;
  search: string;
  page: number;
  list: MovieListItem[];
  data: MovieItem | null;
  error: boolean;
  message?: string | null;
}

// Movie Actions
export interface GetMoviesProps {
  s: string;
  page: number;
}

export interface GetMovieByIDProps {
  i: string;
}
