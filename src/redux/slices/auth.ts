import { createSlice } from "@reduxjs/toolkit";

// reducer to update user authentication status
const authSlice = createSlice({
    name: 'auth', // name of slice
    initialState: {
        isAuthenticated: false // log user out initially
    },
    reducers: {
        signup: (state) => {
            state.isAuthenticated = true // set state to true on login  
        },
        login: (state) => {
            state.isAuthenticated = true // set state to true on login  
        },
        logout: (state) => {
            state.isAuthenticated = false // set state to false on logout
        }
    }
})


export const { signup, login, logout } = authSlice.actions // export actions

export default authSlice.reducer // export reducer