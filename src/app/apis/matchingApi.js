// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseUrl";

// Define a service using a base URL and expected endpoints
export const matchingApi = createApi({
  reducerPath: "matchingApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  tagTypes: ["ConnectionRequest", "Feed", "ConnectedResults"],
  endpoints: (builder) => ({
    connections: builder.query({
      query: () => "user/connections",
      providesTags: ["ConnectedResults"],
    }),

    connectionRequest: builder.query({
      query: () => "user/requests/received",
      providesTags: ["ConnectionRequest"],
    }),

    acceptOrRejectRequests: builder.mutation({
      query: ({ state, id }) => ({
        url: `request/review/${state}/${id}`,
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            matchingApi.util.invalidateTags([
              "ConnectionRequest",
              "Feed",
              "ConnectedResults",
            ])
          );
        } catch (err) {
          console.log(err.message);
        }
      },
    }),
    getAllFeed: builder.query({
      query: () => "feed",
      providesTags: ["Feed"],
    }),

    //interested or ignored
    interestIgnoreRequests: builder.mutation({
      query: ({ state, id }) => ({
        url: `request/send/${state}/${id}`,
        method: "POST",
      }),
      async onQueryStarted({id}, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          matchingApi.util.updateQueryData("getAllFeed", undefined, (draft) => {
            draft.feedList = draft.feedList.filter((user) => user._id !== id);
          })
        );
        try {
          await queryFulfilled;
          dispatch(
            matchingApi.util.invalidateTags([
              "ConnectionRequest",
              "Feed",
              "ConnectedResults",
            ])
          );
        } catch (err) {
          patchResult.undo();
          console.log(err.message);
        }
      },
    }),
  }),
});

export const {
  useConnectionsQuery,
  useConnectionRequestQuery,
  useGetAllFeedQuery,
  useAcceptOrRejectRequestsMutation,
  useInterestIgnoreRequestsMutation,
} = matchingApi;
