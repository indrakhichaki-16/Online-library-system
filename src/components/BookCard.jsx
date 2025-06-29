// BookCard.jsx
// Displays a single book card with title, image, and a link to details
import { Link } from "react-router";

function BookCard({ book }) {
  // book: object containing book details (title, cover_img, id, etc.)
  return (
    <Link
      to={`/book/${book.id}`}
      className="group card flex flex-col items-center w-[70%] md:w-[25%] lg:w-[20%] xl:w-[15%] rounded-lg shadow-sm bg-white/50 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden"
    >
      <div className="w-full h-[250px] md:h-[200px] p-2">
        <img
          className="w-full h-full rounded-md object-fill"
          src={book.cover_img}
          alt={book.title}
        />
      </div>
      <div className="p-3 text-center w-full">
        <h2 className="font-bold text-slate-800 truncate">{book.title}</h2>
        {/* Visual cue that the card is clickable */}
        <span
          className="mt-3 inline-block text-sm py-1 px-3 bg-slate-600 text-white rounded-md transition-transform transition-colors duration-200 group-hover:bg-slate-700 group-hover:scale-105"
        >
          View Details
        </span>
      </div>
    </Link>
  );
}

export default BookCard;
