import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./api/authApi";

// creating redux store
const store = configureStore({
    reducer: {
        // redux slices for our application state

        // redux slices for RTK api
        [AuthApi.reducerPath]: AuthApi.reducer,
        
    },
    // middleware to add the redux api middleware we defined above to our default redux middleware so it can be run with it
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(AuthApi.middleware)
})

export default store;


// define rootstate type to used by selectors
export type RootState = ReturnType<typeof store.getState>

// define dispatch type to be used when dispatching redux actions
export type AppDispatch = typeof store.dispatch