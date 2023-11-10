import { createSlice } from '@reduxjs/toolkit';
import { AuthInitialState } from '../types/store-types';

const initialState: AuthInitialState = {
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
    changeAmount(state, action) {
      if (state.currentUser) {
        state.currentUser.amount -= action.payload;
      }
    },
  },
});

export default authSlice.reducer;
export const { logInUser, setCurrentUser, logOutUser } = authSlice.actions;
