import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface ProductsResponse {
  products: Product[];
}

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<ProductsResponse, void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
