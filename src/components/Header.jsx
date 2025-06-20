// Header.jsx
// Displays the navigation bar for the application
import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <>
      {/* Sticky header with navigation links */}
      <header className="w-full h-[6vh] flex flex-col items-center justify-center nav-blur-gradient shadow-md sticky top-0 z-20">
        <nav className="w-full p-0.5">
          <ul className="flex justify-center items-center gap-2.5 md:gap-8">
            {/* Home link */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active font-bold" : "nav-link"
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
                  isActive ? "nav-link active font-bold" : "nav-link"
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
                  isActive ? "nav-link active font-bold" : "nav-link"
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
