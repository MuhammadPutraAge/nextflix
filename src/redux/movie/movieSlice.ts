import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovieByID, getMovies } from "./movieActions";
import { MovieState } from "@/types/movie";

const initialState: MovieState = {
  loading: false,
  search: "",
  page: 1,
  list: [],
  data: null,
  error: false,
  message: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    resetMovie: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.search = action.payload;
      state.page = 1;
      state.list = [];
      state.error = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.list;
        state.page = action.payload.page;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(getMovieByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieByID.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMovieByID.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { resetMovie } = movieSlice.actions;

export default movieSlice.reducer;
