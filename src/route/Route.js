import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/aboutUser/login/Login";
import SignUp from "../pages/aboutUser/signup/SignUp";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
