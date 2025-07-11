# Online Library System

A React-based online library system that allows users to browse, search, and add books. Built with Redux for state management and React Router for navigation.

## Features
- View popular books with 4.7+ ratings on the home page
- Browse all books or filter by category
- createBrowserRouter is used to configure and manage routing
- Dynamic vertical scrollbar designed for the home page and browse books page
- Search books by author or title
- View detailed information about each book (dynamic route)
- Add new books with form validation 
- Slider rating scale is included to rate the book
- Toast notification is added to notify the user on successfully adding new book
- Local Storage to persist any newly added books
- 404 Error page for undefined routes
- Responsive and modern UI with interactive elements

## Github Repository link
`https://github.com/indrakhichaki-16/Online-library-system`

## Project Structure
```
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
```

## Running the application
```
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Application is available at [http://localhost:5173] in your browser by default.
```

## Website design
- Home page is designed to show the available book categories and the most popular books available with a rating of 4.7+/5
- Browse Books page displays all the books that are available in the website
- Add book will allow you to add a book in the Library. Once a book is successfully added to the library, the browse page is display with the newly added book

## Technologies used
- Vite (Build tool for fast development and optimized production)
- React (For building the user interface)
- JavaScript (Scripting language)
- HTML & CSS (Markup and styling)
- Tailwind CSS (Open source CSS framework)

