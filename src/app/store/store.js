import { configureStore } from "@reduxjs/toolkit";
import { accountApi } from "../apis/userApi";
import { matchingApi } from "../apis/matchingApi";
import { accountSlice } from "../slices/accountSlice"
import { chatApi } from "../apis/chatApi";

export const store = configureStore({
    reducer: {
        [accountApi.reducerPath]: accountApi.reducer,
        [matchingApi.reducerPath]: matchingApi.reducer,
        [chatApi.reducerPath]: chatApi.reducer,
        account: accountSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            accountApi.middleware,
            matchingApi.middleware,
            chatApi.middleware,
        ),
});
