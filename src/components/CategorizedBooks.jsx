// CategorizedBooks.jsx
// Displays books filtered by category using a dynamic route
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { mockBooks } from "../utils/mockBook";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

function CategorizedBooks() {
  // Get the category from the URL parameters
  const { category } = useParams();
  // Local state to hold all books
  const [books, setBooks] = useState([]);
  // Get user-added books from Redux
  const user_books = useSelector((state) => state.books.items);

  // On mount, combine user books and mock books
  useEffect(() => {
    setBooks([...user_books, ...mockBooks]);
  }, []);

  // Filter books by category (case-insensitive)
  const filteredBooks = books.filter((book) => {
    return book.genre
      .trim()
      .toLowerCase()
      .includes(category.trim().toLowerCase());
  });

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold text-xl mt-1 mb-4">
          {category} Books
        </h1>
        {/* Back to browse link */}
        <Link
          to="/browse-books"
          className="mb-4 px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
        >
          Back to Browse
        </Link>
      </div>
      {/* Book cards for the selected category */}
      <div className="cardContainer flex flex-col flex-wrap md:flex-row md:justify-center gap-2.5 md:gap-8 items-center mt-1.5">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => {
            return <BookCard key={book.id} book={book} />;
          })
        ) : (
          <h3>Sorry no books available in this category!</h3>
        )}
      </div>
    </>
  );
}

export default CategorizedBooks;
