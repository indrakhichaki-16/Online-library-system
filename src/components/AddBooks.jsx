// AddBooks.jsx
// Component for adding a new book to the library system
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "../features/books/bookSlice";
import { mockBooks } from "../utils/mockBook";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBooks() {
  // Local state to hold book details
  const [book, setBook] = useState({});
  // Local state to hold error messages
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // For navigation after adding a book
  const dispatch = useDispatch(); // For dispatching Redux actions

  // Helper to generate a unique id
  const generateUniqueId = () => `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

  // Handle input changes and update book state
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  // Validate and add the book
  const handleAddBook = () => {
    const alphaRegex = /^[A-Za-z ]+$/;
    // Check for empty fields
    if (!book.title || !book.author || !book.genre || !book.description || book.rating === undefined) {
      setError("Please fill in all fields, including rating");
    } else if (!alphaRegex.test(book.author)) {
      setError("Author name should contain only alphabets and spaces");
    } else if (!alphaRegex.test(book.genre)) {
      setError("Genre should contain only alphabets and spaces");
    } else if (book.cover_img && !book.cover_img.startsWith("http")) {
      setError("Please enter a valid URL for the image");
    } else {
      setError(null);
      const newBook = { ...book, id: generateUniqueId() };
      dispatch(addBooks(newBook)); // Add book to Redux store
      toast.success("Book added to Library!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        closeButton: false,
        icon: false,
        style: {
          background: "#334155",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "10px",
          fontSize: "1rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
          textAlign: "center",
        },
      });
      setBook({}); // Reset form
      setTimeout(() => navigate("/browse-books"), 1200); // Redirect after toast
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
        <div className="bg-white/50 backdrop-blur-sm w-full max-w-2xl p-2 rounded-lg shadow-sm">
          <form className="flex flex-col gap-2.5 w-full">
            {/* Book Title Input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-slate-700" htmlFor="title">
                Title:
              </label>
              <input
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-100 border-2 border-transparent rounded-md shadow-inner transition duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                placeholder="e.g., The Great Gatsby"
                type="text"
                name="title"
              />
            </div>
            {/* Author Input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-slate-700" htmlFor="author">
                Author:
              </label>
              <input
                onChange={handleChange}
                placeholder="e.g., F. Scott Fitzgerald"
                className="w-full px-3 py-2 bg-slate-100 border-2 border-transparent rounded-md shadow-inner transition duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                type="text"
                name="author"
              />
            </div>
            {/* Genre Input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-slate-700" htmlFor="genre">
                Genre:
              </label>
              <input
                onChange={handleChange}
                placeholder="e.g., Fiction"
                className="w-full px-3 py-2 bg-slate-100 border-2 border-transparent rounded-md shadow-inner transition duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                type="text"
                name="genre"
              />
            </div>
            {/* Description Input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-slate-700" htmlFor="description">
                Description:
              </label>
              <textarea
                onChange={handleChange}
                placeholder="A short summary of the book..."
                className="w-full px-3 py-2 bg-slate-100 border-2 border-transparent rounded-md shadow-inner transition duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                name="description"
              ></textarea>
            </div>
            {/* Image URL Input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-slate-700" htmlFor="image">
                Image URL:
              </label>
              <input
                onChange={handleChange}
                placeholder="https://example.com/book-cover.jpg"
                className="w-full px-3 py-2 bg-slate-100 border-2 border-transparent rounded-md shadow-inner transition duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400"
                type="url"
                name="cover_img"
              />
            </div>
            {/* Rating Input (Slider) */}
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-slate-700" htmlFor="rating">
                Rating:
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.1"
                  name="rating"
                  value={book.rating || 3}
                  onChange={e => setBook({
                    ...book,
                    rating: parseFloat(e.target.value)
                  })}
                  className="w-full accent-slate-700"
                />
                <span className="font-semibold text-slate-700 min-w-[2.5rem] text-center">{book.rating ? Number(book.rating).toFixed(1) : "3.0"}</span>
              </div>
              <span className="text-xs text-slate-500">Rate the book (out of 5)</span>
            </div>
            {/* Add Book Button */}
            <div className="self-center">
              <button
                className="bg-slate-700 text-white px-6 py-2 rounded-md cursor-pointer mt-4 transition duration-200 hover:bg-slate-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        closeButton={false}
        icon={false}
        theme="colored"
      />
    </>
  );
}

export default AddBooks;
