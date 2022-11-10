import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/aboutUser/addServices/AddService";
import Login from "../pages/aboutUser/login/Login";
import EditReview from "../pages/aboutUser/reviews/EditReview";
import MyReviews from "../pages/aboutUser/reviews/MyReviews";
import SignUp from "../pages/aboutUser/signup/SignUp";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import ServiceDetails from "../pages/services/ServiceDetails";
import Services from "../pages/services/Services";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/editReview",
        element: <EditReview></EditReview>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-side.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
]);
