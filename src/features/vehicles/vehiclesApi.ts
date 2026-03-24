import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse, Vehicle } from '../../types/vehicle';

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getVehicles: builder.query<Vehicle[], void>({
      query: () => 'products/category/vehicle',
      transformResponse: (response: ApiResponse) => response.products,
    }),
    getVehicleById: builder.query<Vehicle, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetVehiclesQuery, useGetVehicleByIdQuery } = vehiclesApi;