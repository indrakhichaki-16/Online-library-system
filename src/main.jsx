// main.jsx
// Entry point for the React application. Sets up Redux and React Router.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./utils/store.js";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import AddBooks from "./components/AddBooks";
import Error from "./components/Error";
import BrowseBooks from "./components/BrowseBooks";
import CategorizedBooks from "./components/CategorizedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen">
        <Header />
        <main className="p-4 md:p-6">
          <Home />
        </main>
      </div>
    ),
    errorElement: (
      <div className="min-h-screen">
        <Header />
        <main className="p-4 md:p-6">
          <Error />
        </main>
      </div>
    ),
  },
  {
    path: "/book-details",
    element: (
      <div className="min-h-screen">
        <Header />
        <main className="p-4 md:p-6">
          <BookDetails />
        </main>
      </div>
    ),
  },
  {
    path: "/book/:id",
    element: (
      <div className="min-h-screen">
        <Header />
        <main className="p-4 md:p-6">
          <BookDetails />
        </main>
      </div>
    ),
  },
  {
    path: "/add-books",
    element: (
      <div className="min-h-screen">
        <Header />
        <main className="p-4 md:p-6">
          <AddBooks />
        </main>
      </div>
    ),
  },
  {
    path: "/browse-books",
    element: (
      <div className="min-h-screen">
        <Header />
        <main className="p-4 md:p-6">
          <BrowseBooks />
        </main>
      </div>
    ),
  },
  {
    path: "/books/:category",
    element: (
      <div className="min-h-screen">
        <Header />
        <main className="p-4 md:p-6">
          <CategorizedBooks />
        </main>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div className="min-h-screen">
        <Header />
        <main className="p-4 md:p-6">
          <Error />
        </main>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
