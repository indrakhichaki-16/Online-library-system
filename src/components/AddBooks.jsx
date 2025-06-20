// AddBooks.jsx
// Component for adding a new book to the library system
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "../features/books/bookSlice";
import { mockBooks } from "../utils/mockBook";

function AddBooks() {
  // Local state to hold book details
  const [book, setBook] = useState({});
  // Local state to hold error messages
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // For navigation after adding a book
  const dispatch = useDispatch(); // For dispatching Redux actions

  // Handle input changes and update book state
  const handleChange = (e) => {
    setBook({
      ...book,
      id: mockBooks.length + 1, // Assign a new id
      [e.target.name]: e.target.value,
    });
  };

  // Validate and add the book
  const handleAddBook = () => {
    const alphaRegex = /^[A-Za-z ]+$/;
    // Check for empty fields
    if (!book.title || !book.author || !book.genre || !book.description) {
      setError("Please fill in all fields");
    } else if (!alphaRegex.test(book.author)) {
      setError("Author name should contain only alphabets and spaces");
    } else if (!alphaRegex.test(book.genre)) {
      setError("Genre should contain only alphabets and spaces");
    } else if (book.cover_img && !book.cover_img.startsWith("http")) {
      setError("Please enter a valid URL for the image");
    } else {
      setError(null);
      dispatch(addBooks(book)); // Add book to Redux store
      setBook({}); // Reset form
      navigate("/browse-books"); // Redirect to browse page
    }
  };

  return (
    <>
      <h1 className="text-center font-bold text-xl mt-2.5">Add a New Book</h1>
      {/* Display error message if any */}
      <p className="text-red-500 text-center font-semibold mt-1">
        {error !== null && error}
      </p>
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="glass-container w-full max-w-2xl p-6 flex justify-center items-center">
          <form className="flex flex-col gap-3 w-full">
            {/* Book Title Input */}
            <div className="flex gap-1.5 items-center">
              <label className="font-semibold" htmlFor="title">
                Title:
              </label>
              <input
                onChange={handleChange}
                className="w-full px-2 bg-gray-300 p-1 rounded shadow shadow-gray-400 transition duration-200 hover:bg-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Enter book title"
                type="text"
                name="title"
              />
            </div>
            {/* Author Input */}
            <div className="flex gap-1.5 items-center">
              <label className="font-semibold" htmlFor="author">
                Author:
              </label>
              <input
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full px-2 bg-gray-300 p-1 rounded shadow shadow-gray-400 transition duration-200 hover:bg-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                type="text"
                name="author"
              />
            </div>
            {/* Genre Input */}
            <div className="flex gap-1.5 items-center">
              <label className="font-semibold" htmlFor="genre">
                Genre:
              </label>
              <input
                onChange={handleChange}
                placeholder="Enter genre of the book"
                className="w-full px-2 bg-gray-300 p-1 rounded shadow shadow-gray-400 transition duration-200 hover:bg-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                type="text"
                name="genre"
              />
            </div>
            {/* Description Input */}
            <div className="flex gap-1.5 items-center">
              <label className="font-semibold" htmlFor="description">
                Description:
              </label>
              <textarea
                onChange={handleChange}
                placeholder="Enter description"
                className="w-full px-2 bg-gray-300 p-1 rounded shadow shadow-gray-400 transition duration-200 hover:bg-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                name="description"
              ></textarea>
            </div>
            {/* Image URL Input */}
            <div className="flex gap-1.5 items-center">
              <label className="font-semibold" htmlFor="image">
                Image URL:
              </label>
              <input
                onChange={handleChange}
                placeholder="Enter book img url"
                className="w-full px-2 bg-gray-300 p-1 rounded shadow shadow-gray-400 transition duration-200 hover:bg-gray-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                type="url"
                name="cover_img"
              />
            </div>
            {/* Add Book Button */}
            <div className="self-center">
              <button
                className="bg-slate-400 px-2 py-1 rounded cursor-pointer mt-1.5 transition duration-200 hover:bg-slate-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                type="button"
                title="Add Book"
                onClick={handleAddBook}
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBooks;
