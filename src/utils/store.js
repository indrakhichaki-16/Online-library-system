// store.js
// Configures the Redux store for the application
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/bookSlice.js";

// Create the Redux store and register the books reducer
export const store = configureStore({
    reducer: {
        books: bookReducer, // Add the book reducer to the store
    },
});