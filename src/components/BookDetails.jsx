// BookDetails.jsx
// Displays detailed information about a selected book using a dynamic route
import { useParams } from "react-router";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { mockBooks } from "../utils/mockBook";

function BookDetails() {
  // Get the book id from the route parameters
  const { id } = useParams();
  // Get user-added books from Redux
  const redux_books = useSelector((state) => state.books.items);
  // Combine user books and mock books
  const allBooks = [...redux_books, ...mockBooks];
  // Find the book with the matching id
  const book = allBooks.find((b) => String(b.id) === String(id));

  // If book is not found, show an error message
  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl text-red-500 font-bold">Book Not Found</h1>
        <Link to="/browse-books" className="mt-4 px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">Back to Browse</Link>
      </div>
    );
  }

  // Render book details
  return (
    <>
      <h1 className="text-xl text-center font-bold mt-1">Book Details</h1>
      <div className="w-full flex justify-center items-center p-0">
        <div className="w-full md:w-[50%] lg:w-[30%] flex flex-col items-center mx-2.5 my-1.5 rounded shadow-lg shadow-slate-400">
          <div className="w-full h-[300px] md:h-[300px] lg:h-[380px]">
            <img
              className="w-full h-full rounded-tl rounded-tr"
              src={book.cover_img}
              alt={book.title}
            />
          </div>
          <div className="flex flex-col gap-2.5 self-start m-2.5">
            <h2>
              <span className="text-lg font-semibold">Title:</span>
              <span className="ml-1 text-lg">{book.title}</span>
            </h2>
            <p>
              <span className="text-lg font-semibold">Author:</span>
              <span className="ml-1 text-lg">{book.author}</span>
            </p>
            <p>
              <span className="text-lg font-semibold">Description:</span>
              <span className="ml-1 text-lg">{book.description}</span>
            </p>
            {/* Only show rating if available */}
            {book.rating && (
              <p>
                <span className="text-lg font-semibold">Rating:</span>
                <span className="ml-1 text-lg">{book.rating}/5</span>
              </p>
            )}
            <p>
              <span className="text-lg font-semibold">Genre:</span>
              <span className="ml-1 text-lg">{book.genre}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-0">
        <Link
          to={"/browse-books"}
          className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
        >
          Back to Browse
        </Link>
      </div>
    </>
  );
}

export default BookDetails;
