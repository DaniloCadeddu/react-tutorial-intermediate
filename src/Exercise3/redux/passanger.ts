import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Airline {
  id: number;
  name: string;
  country: string;
}

interface Passanger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
}

interface PassangersListResponse {
  totalPassangers: number;
  totalPages: number;
  data: Passanger[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.instantwebtools.net/v1/passenger",
  }),
  endpoints: (builder) => ({
    passangersList: builder.query<PassangersListResponse, number>({
      query: (page = 0) => `?page=${page}&size=10`,
    }),
  }),
});

export const { usePassangersListQuery } = api;
