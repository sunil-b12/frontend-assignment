import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/'
  }),
  endpoints: (builder) => ({

    getproducts: builder.query({
      query: (q) => ({
        url: 'products'
      })
    })
  })

})


export const { useGetproductsQuery } = productApi
