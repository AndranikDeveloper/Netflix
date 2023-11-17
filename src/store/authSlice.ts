import { createSlice } from '@reduxjs/toolkit';
import { AuthInitialState } from '../types/store-types';

export const initialState: AuthInitialState = {
  users: [],
  currentUser: null,
  quizItems: [],
  randomObject: null,
  guessedCount: 0,
  randomItems: [],
  attemptCount: 0,
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
        state.currentUser.amount -= action.payload.price;
        if (state.currentUser.transaction) {
          state.currentUser.transaction = [
            ...state.currentUser.transaction,
            action.payload,
          ];
        } else {
          state.currentUser.transaction = [action.payload];
        }
      }
    },
    sellUserMovie(state, action) {
      if (state.currentUser) {
        state.currentUser.amount += action.payload.price;
        if (state.currentUser.transaction) {
          state.currentUser.transaction = [
            ...state.currentUser.transaction,
            action.payload,
          ];
        } else {
          state.currentUser.transaction = [action.payload];
        }
      }
    },
    setRandomObject(state, action) {
      state.randomObject = action.payload;
    },
    setRandomItems(state, action) {
      state.randomItems = action.payload;
    },
    increaseCount(state) {
      state.guessedCount += 1;
    },
    resetCount(state) {
      state.guessedCount = 0;
    },
    setAttemptCount(state) {
      state.attemptCount = state.attemptCount + 1;
    },
    resetAttemptCount(state) {
      state.attemptCount = 0;
    },
    changeUserAmount(state, action) {
      if (state.currentUser) {
        state.currentUser.amount += action.payload;
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
  sellUserMovie,
  setRandomObject,
  setRandomItems,
  increaseCount,
  resetCount,
  setAttemptCount,
  resetAttemptCount,
  changeUserAmount,
} = authSlice.actions;
