import React, { lazy } from "react";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]);

export default router;
