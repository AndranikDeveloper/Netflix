import { createSlice } from '@reduxjs/toolkit';
import { MovieSlice } from '../types/store-types';
import { getMovie, getMovieVideo } from './store-services';

const initialState: MovieSlice = {
  movie: {},
  error: '',
  isLoading: false,
  results: [],
};

const singleMovieSlice = createSlice({
  name: 'singleMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.error = '';
      })
      .addCase(getMovie.rejected, (state, action) => {
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }
      })
      .addCase(getMovie.pending, (state, action) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getMovieVideo.fulfilled, (state, action) => {
        state.results = action.payload;
        state.error = '';
      })
      .addCase(getMovieVideo.rejected, (state, action) => {
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }
      })
      .addCase(getMovieVideo.pending, (state, action) => {
        state.error = '';
        state.isLoading = true;
      });
  },
});

export default singleMovieSlice.reducer;
