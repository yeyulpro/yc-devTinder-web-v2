import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isLoggedIn: false };

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    //show user who loggedIn
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = accountSlice.actions;

