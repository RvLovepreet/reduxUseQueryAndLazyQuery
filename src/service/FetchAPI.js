import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const allCountry = createApi({
  reducerPath: 'Countries',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://countriesnow.space/api/v0.1/',
  }),
  endpoints: builder => ({
    getAllCountry: builder.query({
      query: () => 'countries',
    }),
    getCity: builder.query({
      query: country => ({
        url: 'countries/cities',
        method: 'POST',
        body: {country: `${country}`},
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const {useLazyGetAllCountryQuery, useGetCityQuery} = allCountry;
