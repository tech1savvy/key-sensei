import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/Pages/PageNotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App data-bs-theme="dark" /> },
  { path: "*", element: <PageNotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
