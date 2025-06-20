# Online Library System

A React-based online library system that allows users to browse, search, and add books. Built with Redux for state management and React Router for navigation.

## Features
- View popular books on the home page
- Browse all books or filter by category
- Search books by author or title
- View detailed information about each book (dynamic route)
- Add new books with form validation 
- Error page for undefined routes
- Responsive and modern UI with interactive elements

## Github Repository link
`https://github.com/indrakhichaki-16/Online-library-system`

## Project Structure
src/
  App.jsx                # Main app and routing
  main.jsx               # React entry point
  components/
    AddBooks.jsx         # Add book form with validation
    BookCard.jsx         # Book card display
    BookDetails.jsx      # Dynamic book details page
    BrowseBooks.jsx      # Browse/search all books
    CategorizedBooks.jsx # Browse by category
    Error.jsx            # 404 error page
    Header.jsx           # Navigation bar
    Home.jsx             # Home page with categories and preview
  features/
    books/
      bookSlice.js       # Redux slice for books
  utils/
    mockBook.js          # Mock book data
    store.js             # Redux store setup
  index.css              # Global styles

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Application is available at [http://localhost:5173](http://localhost:5173) in your browser by default.

## Technologies used
- React
- Vite
- CSS

