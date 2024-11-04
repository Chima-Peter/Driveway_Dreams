import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from "../../types";


// api for authenticating users
export const AuthApi = createApi({
    reducerPath: 'authApi',                     // name of api slice
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'        // define api url
    }),
    endpoints: (builder) => ({                  // define endpoints

        postSignUp: builder.mutation<SignUpResponse, SignUpRequest>({     // endpoint for posting signup request
            query:(data: SignUpRequest) => ({
                url: '/signup',
                method: 'POST',
                body: data
            })
        }),

        postLogin: builder.mutation<LoginResponse, LoginRequest>({        // endpoint for posting signin request
            query:(data: LoginRequest) => ({
                url: '/signin',
                method: 'POST',
                body: data
            })
        }),
    })
})

export const {
    usePostSignUpMutation, usePostLoginMutation
} = AuthApi