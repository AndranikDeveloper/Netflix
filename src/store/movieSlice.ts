import { createSlice } from '@reduxjs/toolkit';
import { MovieSlice } from '../types/store-types';
import { getMovie } from './store-services';

const initialState: MovieSlice = {
  movie: {},
  error: '',
  isLoading: false,
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
      });
  },
});

export default singleMovieSlice.reducer;
