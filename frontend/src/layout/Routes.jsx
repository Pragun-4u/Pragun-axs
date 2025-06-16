import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import NotFoundPage from "../components/NotFoundPage";
import ProtectedRoute from "../components/ProtectedRoute";

const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/",
    errorElement: <NotFoundPage />,
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
