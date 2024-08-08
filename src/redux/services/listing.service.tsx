import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listingApi = createApi({
  reducerPath: "listingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  tagTypes: ["Listing"],
  endpoints: (builder) => ({
    getListings: builder.query<any, void>({
      query: () => ({
        url: `listings`,
        method: `GET`,
      }),
      providesTags: ["Listing"],
    }),
  }),
});

export const {
  useGetListingsQuery
} = listingApi;
