import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { API } from "@/config/api";
import { GetMovieByIDProps, GetMoviesProps, MovieItem, MovieListItem } from "@/types/movie";

const OMDB_API_KEY = "66a9a5a5";

// 1. Get movie list by search
export const getMovies = createAsyncThunk<
  { list: MovieListItem[]; page: number },
  GetMoviesProps,
  { rejectValue: string; state: RootState }
>("movie/list", async ({ s, page }, { rejectWithValue, getState }) => {
  try {
    const query = s === "" ? "batman" : s;
    const prevMovieList = getState().movie.list;

    const { data } = await API.get(
      `/?apikey=${OMDB_API_KEY}&s=${query}&page=${page}`
    );

    return {
      list: [...prevMovieList, ...(data.Search as MovieListItem[])],
      page,
    };
  } catch (e: any) {
    return rejectWithValue(e.response.data.Error);
  }
});

// 2. Get movie by ID
export const getMovieByID = createAsyncThunk<
  MovieItem,
  GetMovieByIDProps,
  { rejectValue: string }
>("movie/data", async ({ i }, { rejectWithValue }) => {
  try {
    const { data } = await API.get(
      `/?apikey=${OMDB_API_KEY}&i=${i}`
    );

    if (!data.Error) {
      return data;
    } else {
      return rejectWithValue(data.Error);
    }
  } catch (e: any) {
    return rejectWithValue(e.response.data.Error);
  }
});
