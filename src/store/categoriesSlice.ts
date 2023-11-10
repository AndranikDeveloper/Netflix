import { createSlice } from '@reduxjs/toolkit';
import {
  comedyMoviesApi,
  comedyMoviesSecondPageApi,
  fantasyMoviesApi,
  fantasyMoviesSecondPageApi,
  horrorMoviesApi,
  horrorMoviesSecondPageApi,
} from './store-services';
import { initialState } from './moviesSlice';

const categoriesReducer = createSlice({
  name: 'categoriesReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(horrorMoviesApi.fulfilled, (state, action) => {
        state.horrorMovies = action.payload;
        state.movies = [...state.movies, ...state.horrorMovies];
        state.error = '';
      })
      .addCase(horrorMoviesApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(horrorMoviesApi.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(horrorMoviesSecondPageApi.fulfilled, (state, action) => {
        state.horrorMovies = [...state.horrorMovies, ...action.payload];
        state.error = '';
      })
      .addCase(horrorMoviesSecondPageApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(horrorMoviesSecondPageApi.pending, (state, action) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(fantasyMoviesApi.fulfilled, (state, action) => {
        state.fantasyMovies = action.payload;
        state.movies = [...state.movies, ...state.fantasyMovies];
        state.error = '';
      })
      .addCase(fantasyMoviesApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fantasyMoviesApi.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fantasyMoviesSecondPageApi.fulfilled, (state, action) => {
        state.fantasyMovies = [...state.fantasyMovies, ...action.payload];
        state.error = '';
      })
      .addCase(fantasyMoviesSecondPageApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fantasyMoviesSecondPageApi.pending, (state, action) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(comedyMoviesApi.fulfilled, (state, action) => {
        state.comedyMovies = action.payload;
        state.movies = [...state.movies, ...state.comedyMovies];
        state.error = '';
      })
      .addCase(comedyMoviesApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(comedyMoviesApi.pending, (state, action) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(comedyMoviesSecondPageApi.fulfilled, (state, action) => {
        state.comedyMovies = [...state.comedyMovies, ...action.payload];
        state.error = '';
      })
      .addCase(comedyMoviesSecondPageApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(comedyMoviesSecondPageApi.pending, (state, action) => {
        state.error = '';
        state.isLoading = true;
      });
  },
});
export default categoriesReducer.reducer;
