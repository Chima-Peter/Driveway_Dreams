import { configureStore } from "@reduxjs/toolkit";

// creating redux store
const store = configureStore({
    reducer: {
        // redux slices for our application state

        // redux slices for RTK api
        
    },
    // middleware to add the RTK CreateAPI middleware we've defined above to our default redux middleware
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
})

export default store;


// define rootstate type to used by selectors
export type RootState = ReturnType<typeof store.getState>

// define dispatch type to be used when dispatching redux actions
export type AppDispatch = typeof store.dispatch