import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./login.jsx";
import Home from "./home.jsx";
import Menu from "./menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
