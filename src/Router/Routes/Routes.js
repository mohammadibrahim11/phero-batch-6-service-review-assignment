import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import AddReviews from "../../Pages/AddReviews/AddReviews";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignIn from "../../Pages/Signin/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/servicesHome"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/servicesHome"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/addreviews/:id",
        element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addservice",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: "/myreviews",
        element:<PrivateRoute> <MyReviews></MyReviews></PrivateRoute>,
      },
    ],
  },
]);

export default router;
