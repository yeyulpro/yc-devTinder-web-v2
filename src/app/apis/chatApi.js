import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseUrl";

export const chatApi = createApi({
    reducerPath: "chatApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),

    endpoints: (builder) => ({
        getAllChat: builder.query({
            query: ({ userId, targetUserId }) => `chat/${userId}/${targetUserId}`,
        }),
    }),
});
export const { useGetAllChatQuery } = chatApi;
