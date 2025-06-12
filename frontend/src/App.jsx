import { RouterProvider } from "react-router";
import "./index.css";
import router from "./layout/Routes";
import { AuthProvider } from "./context/AuthContext";
import { Suspense } from "react";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <AuthProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: "#ffffff",
                color: "#1e293b",
                borderRadius: "10px",
                boxShadow:
                  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              },
              success: { style: { background: "#dcfce7", color: "#166534" } },
              error: { style: { background: "#fee2e2", color: "#991b1b" } },
            }}
          />
          <RouterProvider router={router} />
        </AuthProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
