// Home.jsx
// Displays the home page with a welcome message, book categories, and a preview of popular books
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { mockBooks } from "../utils/mockBook";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Home = () => {
  // Local state for all books
  const [books, setBooks] = useState([]);
  // Get user-added books from Redux
  const redux_books = useSelector((state)=>state.books.items);

  // On mount, combine mock books and user books
  useEffect(() => {
    setBooks([...mockBooks, ...redux_books]);
  }, []);

  // Get unique categories from books
  const categories = [...new Set(books.map(book => book.genre))];

  return (
    <>
      {/* Welcome message */}
      <h1 className="home-h1 font-bold text-center text-xl md:text-2xl mt-1">
        Welcome to the Library Management System!
      </h1>
      <h1 className="home-h1 font-bold text-center text-sm md:text-xl mt-1">
        From timeless classics to the latest bestsellers, your next great read is just a click away.
      </h1>
      
      {/* Book Categories Section */}
      <div className="mt-4 mb-6 flex justify-center">
        <div className="glass-container glass-wide p-4">
          <h2 className="text-center font-semibold text-lg mb-2">Available Book Categories</h2>
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {/* Category links */}
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/books/${encodeURIComponent(category)}`}
                className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Preview of Popular books that are 4.7+ rated */}
      <div className="cardContainer flex flex-col flex-wrap md:flex-row md:justify-center gap-2.5 md:gap-8 items-center mt-1.5">
        {books.filter(book => book.rating && book.rating >= 4.7).length > 0 ? (
          books
            .filter(book => book.rating && book.rating >= 4.7)
            .map((book) => {
              return <BookCard key={book.id} book={book} />;
            })
        ) : (
          <h3>No books with 4.7+ ratings available!</h3>
        )}
      </div>
      {/* Link to browse all books */}
      <div className="flex justify-center mt-8">
        <Link
          to="/browse-books"
          className="px-6 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors text-lg font-semibold"
        >
          Browse All Books
        </Link>
      </div>
    </>
  );
};

export default Home;
