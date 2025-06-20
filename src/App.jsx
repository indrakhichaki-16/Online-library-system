// App.jsx
// Main application component that sets up routing for the online library system
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";
import AddBooks from "./components/AddBooks";
import Error from "./components/Error";
import BrowseBooks from "./components/BrowseBooks";
import CategorizedBooks from "./components/CategorizedBooks";

function App() {
  return (
    <>
      {/* Header is always visible */}
      <Header />
      {/* Define all application routes */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        {/* Book details (legacy, not used) */}
        <Route path="/book-details" element={<BookDetails />} />
        {/* Dynamic book details route */}
        <Route path="/book/:id" element={<BookDetails />} />
        {/* Add a new book */}
        <Route path="/add-books" element={<AddBooks />} />
        {/* Browse all books */}
        <Route path="/browse-books" element={<BrowseBooks />} />
        {/* Browse books by category */}
        <Route path="/books/:category" element={<CategorizedBooks />} />
        {/* Catch-all for 404 errors */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
