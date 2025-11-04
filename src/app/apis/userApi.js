// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./baseUrl";

// Define a service using a base URL and expected endpoints
export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  tagTypes: ["profile"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (creds) => {
        const { emailId, password } = creds;
        console.log(emailId, " and ", password);
        return {
          url: "login",
          method: "POST",
          body: { emailId, password },
        }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(accountApi.util.invalidateTags(["profile"]));
        } catch (err) {
          console.log(err.message);
        }
      },
    }),

    signUp: builder.mutation({
      query: (creds) => ({
        url: "register",
        method: "POST",
        body: creds,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(accountApi.util.invalidateTags(["profile"]));
        } catch (err) {
          console.log(err.message);
        }
      },
    }),

    profile: builder.query({
      query: () => "profile/view",
      providesTags: ["profile"],
    }),

    editProfile: builder.mutation({
      query: (info) => (
        console.log("edited info ", info),

        {

          url: "profile/edit",
          method: "PATCH",
          // headers: { "Content-Type": "application/json" },
          body: info,
        }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(accountApi.util.invalidateTags(["profile"]));
        } catch (err) {
          console.log(err.message);
        }
      },
    }),

    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(accountApi.util.invalidateTags(["profile"]));
        } catch (err) {
          console.log(err.message);
        }
      },
    }),
  }),
});
export const {
  useLoginMutation,
  useProfileQuery,
  useLogoutMutation,
  useEditProfileMutation,
  useSignUpMutation,
} = accountApi;
