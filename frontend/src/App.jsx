import { RouterProvider } from "react-router";
import "./index.css";
import router from "./layout/Routes";
import { AuthProvider } from "./context/AuthContext";
import { Suspense } from "react";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
