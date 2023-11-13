import { createSlice } from '@reduxjs/toolkit';
import { InitialStateTypes } from '../types/store-types';
import {
  popularMoviesApi,
  popularMoviesSecondPageApi,
  topRatedMoviesApi,
  topRatedMoviesSecondPageApi,
  upComingMoviesApi,
  upComingMoviesSecondPageApi,
} from './store-services';

export const initialState: InitialStateTypes = {
  movies: [],
  popularMovies: [],
  topRatedMovies: [],
  upComingMovies: [],
  cartMovies: [],
  horrorMovies: [],
  fantasyMovies: [],
  comedyMovies: [],
  error: '',
  isLoading: false,
  count: 0,
  searchValue: '',
};

const moviesReducer = createSlice({
  name: 'moviesReducer',
  initialState: { ...initialState },
  reducers: {
    addToCart: (state, action) => {
      state.cartMovies = [...state.cartMovies, action.payload];
    },
    deleteFromCart: (state, action) => {
      state.cartMovies = state.cartMovies.filter(
        (cart) => cart.id !== action.payload
      );
    },
    addCountOfSingleCart: (state, action) => {
      state.count += action.payload;
    },
    handleOnChangeValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(popularMoviesApi.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
        const existMovie = new Set(state.movies.map((movie) => movie.overview));
        const newMovies = state.popularMovies.filter(
          (movie) => !existMovie.has(movie.overview)
        );
        state.movies = [...state.movies, ...newMovies];
        state.error = '';
      })
      .addCase(popularMoviesApi.rejected, (state, action) => {
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }
        state.error = action.payload;
      })
      .addCase(popularMoviesApi.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(popularMoviesSecondPageApi.fulfilled, (state, action) => {
        state.popularMovies = [...state.popularMovies, ...action.payload];
        state.error = '';
      })
      .addCase(popularMoviesSecondPageApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(popularMoviesSecondPageApi.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(topRatedMoviesApi.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        const existMovie = new Set(state.movies.map((movie) => movie.overview));
        const newMovies = state.topRatedMovies.filter(
          (movie) => !existMovie.has(movie.overview)
        );
        state.movies = [...state.movies, ...newMovies];
        state.error = '';
      })
      .addCase(topRatedMoviesApi.rejected, (state, action) => {
        state.error = '';
      })
      .addCase(topRatedMoviesApi.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(topRatedMoviesSecondPageApi.fulfilled, (state, action) => {
        state.topRatedMovies = [...state.topRatedMovies, ...action.payload];
        state.error = '';
      })
      .addCase(topRatedMoviesSecondPageApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(topRatedMoviesSecondPageApi.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(upComingMoviesApi.fulfilled, (state, action) => {
        state.upComingMovies = action.payload;
        const existMovie = new Set(state.movies.map((movie) => movie.overview));
        const newMovies = state.upComingMovies.filter(
          (movie) => !existMovie.has(movie.overview)
        );
        state.movies = [...state.movies, ...newMovies];
      })
      .addCase(upComingMoviesApi.rejected, (state, action) => {
        state.error = '';
      })
      .addCase(upComingMoviesApi.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(upComingMoviesSecondPageApi.fulfilled, (state, action) => {
        state.upComingMovies = [...state.upComingMovies, ...action.payload];
        state.error = '';
      })
      .addCase(upComingMoviesSecondPageApi.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(upComingMoviesSecondPageApi.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      });
  },
});

export const {
  addToCart,
  deleteFromCart,
  addCountOfSingleCart,
  handleOnChangeValue,
} = moviesReducer.actions;

export default moviesReducer.reducer;
