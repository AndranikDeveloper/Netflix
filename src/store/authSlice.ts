import { createSlice } from '@reduxjs/toolkit';
import { AuthInitialState } from '../types/store-types';
import { priceOfMovie } from '../components/movie-video/movie-video-services';

export const initialState: AuthInitialState = {
  users: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    logInUser(state, action) {
      state.users = [...state.users, action.payload];
      state.currentUser = action.payload;
    },
    logOutUser(state, action) {
      state.currentUser = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    buyMovie(state, action) {
      if (state.currentUser) {
        state.currentUser.amount -= action.payload;
      }
    },
    sellMovieAmount(state, action) {
      if (state.currentUser) {
        state.currentUser.amount += priceOfMovie;
      }
    },
  },
});

export default authSlice.reducer;
export const {
  logInUser,
  setCurrentUser,
  logOutUser,
  buyMovie,
  sellMovieAmount,
} = authSlice.actions;
