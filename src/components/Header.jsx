// Header.jsx
// Displays the navigation bar for the application
import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <>
      {/* Sticky header with navigation links */}
      <header className="w-full flex flex-col items-center justify-center bg-white/30 backdrop-blur-md shadow-sm sticky top-0 z-20">
        <nav className="w-full p-2">
          <ul className="flex justify-center items-center gap-4 md:gap-8">
            {/* Home link */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition-colors ${isActive ? "bg-slate-200 text-slate-800 font-semibold" : "text-slate-600 hover:bg-slate-100"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            {/* Browse Books link */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition-colors ${isActive ? "bg-slate-200 text-slate-800 font-semibold" : "text-slate-600 hover:bg-slate-100"}`
                }
                to="/browse-books"
              >
                Browse Books
              </NavLink>
            </li>
            {/* Add Book link */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition-colors ${isActive ? "bg-slate-200 text-slate-800 font-semibold" : "text-slate-600 hover:bg-slate-100"}`
                }
                to="/add-books"
              >
                Add Book
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
