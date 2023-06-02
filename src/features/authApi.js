import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1"
    }),
    endpoints: (builder) => ({

        userLogin: builder.mutation({
            query: (q) => ({
                url: '/auth/login',
                method: 'POST',
                body: q,
                header:{
                    "Authorization": "Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg}"
                }
            })
        })
    })
})

export const {useUserLoginMutation} = authApi

