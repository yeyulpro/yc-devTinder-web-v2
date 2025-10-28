import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isLogginedIn: false };

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    //show user who loggedIn
    setUser(state, action) {
      state.user = action.payload;
      state.isLogginedIn = true;
    },
    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = accountSlice.actions;

