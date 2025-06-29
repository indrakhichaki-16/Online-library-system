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
      <h1 className="text-xl text-center font-bold text-slate-800">Book Details</h1>
      <div className="w-full flex justify-center items-start p-4">
        <div className="w-full max-w-2xl flex flex-col md:flex-row items-stretch bg-white/50 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden">
          <div className="w-full md:w-[180px] flex-shrink-0">
            <img
              className="w-full h-full object-fill rounded-l"
              src={book.cover_img}
              alt={book.title}
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div>
              <span className="text-2xl font-bold text-slate-800">{book.title}</span>
              <span className="block text-md text-slate-600">by {book.author}</span>
            </div>
            
            <p className="text-slate-700">
              {book.description}
            </p>
            {/* Only show rating if available */}
            {book.rating && (
              <p className="font-semibold text-slate-700">
                Rating: <span className="font-normal text-slate-600">{book.rating}/5</span>
              </p>
            )}
            <p className="font-semibold text-slate-700">
              Genre: <span className="font-normal bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-sm">{book.genre}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={"/browse-books"}
          className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors"
        >
          Back to Browse
        </Link>
      </div>
    </>
  );
}

export default BookDetails;
