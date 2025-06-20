// bookSlice.js
// Redux slice for managing the books state
import { createSlice } from "@reduxjs/toolkit";

// Initial state: an array to hold book objects
const initialState = {
    items: [], // Array to hold book objects
};

// Create the books slice
export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        // Reducer to add a new book to the array
        addBooks: (state, action) => {
            state.items.push(action.payload); // Add the new book to the books array
        }
    }
})

// Export the action to add books
export const { addBooks } = bookSlice.actions;
// Export the reducer to be used in the store
export default bookSlice.reducer;