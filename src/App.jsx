import { RouterProvider } from "react-router";
import "./index.css";
import router from "./layout/Routes";
import { AuthProvider } from "./context/AuthContext";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Suspense>
  );
}

export default App;
