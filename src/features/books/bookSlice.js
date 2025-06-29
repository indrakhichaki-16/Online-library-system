// bookSlice.js
// Redux slice for managing the books state
import { createSlice } from "@reduxjs/toolkit";

// Helper function to safely get books from localStorage
const getBooksFromStorage = () => {
  try {
    const storedBooks = localStorage.getItem('userBooks');
    return storedBooks ? JSON.parse(storedBooks) : [];
  } catch (error) {
    console.error('Error loading books from localStorage:', error);
    return [];
  }
};

// Helper function to safely save books to localStorage
const saveBooksToStorage = (books) => {
  try {
    localStorage.setItem('userBooks', JSON.stringify(books));
  } catch (error) {
    console.error('Error saving books to localStorage:', error);
  }
};

// Initial state: load books from localStorage or empty array
const initialState = {
    items: getBooksFromStorage(), // Load books from localStorage
};

// Create the books slice
export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        // Reducer to add a new book to the array
        addBooks: (state, action) => {
            state.items.push(action.payload); // Add the new book to the books array
            saveBooksToStorage(state.items); // Save updated books to localStorage
        }
    }
})

// Export the action to add books
export const { addBooks } = bookSlice.actions;
// Export the reducer to be used in the store
export default bookSlice.reducer;