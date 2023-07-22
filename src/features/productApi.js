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
    }),

    getproductsByCatagory: builder.query({
      query: (q) => ({
        url: `products/category/${q}`
      })
    }),
    getproductsById: builder.query({
      query: (q) => ({
        url: `products/${q}`
      })
    }),
    getSearchProducts: builder.query({
      query: (q) => ({
        url: 'products/search',
        params: {
          q: q
        }
      })
    }),

  })

})


export const { useGetproductsQuery, useGetproductsByCatagoryQuery, useGetproductsByIdQuery, useGetSearchProductsQuery } = productApi
