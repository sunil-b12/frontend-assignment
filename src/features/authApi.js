import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1"
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({

        userLogin: builder.mutation({
            query: (q) => ({
                url: '/auth/login',
                method: 'POST',
                body: q,

            }),
            invalidatesTags: ['User']

        }),
        userSignUp: builder.mutation({
            query: (q) => ({
                url: '/users',
                method: 'POST',
                body: q
            }),
            invalidatesTags: ['User']
        }),
        
        getUserById: builder.query({
            query: (q) => ({
              url: '/auth/profile',
              headers: {
                "Authorization": `Bearer ${q}`
              }
            }),
            providesTags: ['User']
          })
    })
})

export const { useUserLoginMutation, useUserSignUpMutation, useGetUserByIdQuery } = authApi

