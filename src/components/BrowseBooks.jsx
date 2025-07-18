// BrowseBooks.jsx
// Displays all books and allows searching and filtering by category
import React, { useEffect } from "react";
import BookCard from "./BookCard";
import { mockBooks } from "../utils/mockBook";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function BrowseBooks() {
  // Local state for all books
  const [books, setBooks] = useState([]);
  // Local state for search input
  const [search, setSearch] = useState("");
  // Local state for selected category (not used directly)
  const [category, setCategory] = useState("");
  // Get user-added books from Redux
  const user_books = useSelector((state) => state.books.items);
  const navigate = useNavigate();

  // On mount, combine user books and mock books
  useEffect(() => {
    setBooks([...user_books, ...mockBooks]);
  }, []);

  // Get unique categories from books
  const categories = [...new Set(books.map(book => book.genre))];

  // Handle search input change
  const handleChange = (e) => {
    const searchValue = e.target.value.trim().toLowerCase();
    setSearch(searchValue);
  };

  // Handle category selection
  const handleSelect = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(`/books/${encodeURIComponent(selectedCategory)}`);
    }
  };

  // Filter books by search input
  const filteredBooks = books.filter((book) => {
    const matchedSearch =
      search === "" ||
      book.title.trim().toLowerCase().includes(search) ||
      book.author.trim().toLowerCase().includes(search);

    return matchedSearch;
  });

  return (
    <>
      <h1 className="text-center text-xl font-bold mt-1.5">
        Browse Books based on category or author/title
      </h1>
      <div className="flex flex-col-reverse lg:flex-row xl:mx-42 items-center gap-2 mt-4 p-1">
        {/* Category dropdown */}
        <div className="w-full md:w-[80%] lg:w-[40%] flex items-center justify-center md:justify-normal md:px-2 gap-2.5 p-1 lg:mx-2">
          <h4 className="font-medium">Select Category:</h4>
          <select
            onChange={handleSelect}
            title="select the category of books"
            name="genre"
            className="cursor-pointer bg-slate-300 rounded py-1 px-2 shadow shadow-gray-400 hover:bg-slate-200"
          >
            <option value="">Select genre of the books</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* Search input */}
        <div className="w-full md:w-[80%] lg:w-[60%] flex items-center justify-center gap-2.5 lg:mx-2">
          <div className="w-full flex items-center gap-2 p-0.5">
            <input
              onChange={handleChange}
              type="search"
              placeholder="Search by author or title"
              className="w-full px-2 bg-gray-300 p-1 rounded shadow shadow-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>
        </div>
      </div>
      {/* Book cards */}
      <div className="cardContainer flex flex-col flex-wrap md:flex-row md:justify-center gap-2.5 md:gap-8 items-center mt-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => {
            return <BookCard key={book.id} book={book} />;
          })
        ) : (
          <h3>Sorry your searched books are not available!</h3>
        )}
      </div>
    </>
  );
}

export default BrowseBooks;
