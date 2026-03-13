import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginForm from "./components/Auth/LoginForm.jsx";
import RegisterForm from "./components/Auth/RegisterForm.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "./components/Pages/PageNotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <LoginForm /> },
  { path: "/register", element: <RegisterForm /> },
  { path: "*", element: <PageNotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
