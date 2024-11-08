import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const CarsApi = createApi({
    reducerPath: 'carsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:8000/cars', // api url
        credentials: 'include' // send cookies with every request as frontend and backend are on different servers
    }),
    endpoints: (builder) => ({
        getCarByID: builder.query({ // get cars by id
            query: (id:string) => ({
                url: `getCarById/${id}`,
            }),
        }),
        getAllCars: builder.query({ // get all cars
            query: () => '/getAllCars'
        }),
    }),
})

export const {
    useGetAllCarsQuery,
    useLazyGetCarByIDQuery
} = CarsApi // export the query request............lazy export so we can control the query