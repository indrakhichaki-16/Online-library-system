// main.jsx
// Entry point for the React application. Sets up Redux and React Router.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { store } from "./utils/store.js";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

// Mount the React app to the DOM, wrapping with Redux Provider and Router
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
