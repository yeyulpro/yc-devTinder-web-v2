import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isLoggedIn: false,isLoading:true };

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    //show user who loggedIn
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = accountSlice.actions;

