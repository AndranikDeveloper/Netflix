import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Movie, MovieVideoResponse, SingleMovie } from '../types/store-types';
import { AppDispatch, RootState } from './store';

const url = ``;

export const popularMoviesApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('popularMovies/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const popularMoviesSecondPageApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('popularMoviesSecondPage/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const topRatedMoviesApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('topRatedMovies/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const topRatedMoviesSecondPageApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('topRatedMoviesSecondPage/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const upComingMoviesApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('upComingMovies/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const upComingMoviesSecondPageApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('upComingMoviesSecondPage/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const horrorMoviesApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('horrorMovies/api', async (url, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${url}`);
    return response.data.results;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});

export const fantasyMoviesApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('fantasyMovies/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const comedyMoviesApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('comedyMovies/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const horrorMoviesSecondPageApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('horrorSecondPageMovies/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const fantasyMoviesSecondPageApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('fantasySecondPageMovies/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const comedyMoviesSecondPageApi = createAsyncThunk<
  Movie[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('comedySecondPageMovies/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const getMovie = createAsyncThunk<
  SingleMovie,
  string,
  { dispatch: AppDispatch; geState: RootState }
>('getMovie/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data;
});

export const getMovieVideo = createAsyncThunk<
  { key: string }[],
  string,
  { dispatch: AppDispatch; geState: RootState }
>('getMovieVideo/api', async (url, thunkApi) => {
  const response = await axios.get(`${url}`);
  return response.data.results;
});

export const changeTheAmount = createAsyncThunk('changeAmount', async () => {});
