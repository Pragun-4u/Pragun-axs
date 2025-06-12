import React from "react";
import { Link } from "react-router-dom";

const FrownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const NotFoundPage = () => {
  return (
    <div className="flex-1 p-8 flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-lg w-full text-center">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100">
          <FrownIcon className="h-12 w-12 text-indigo-600" />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-slate-800">
          404 - Page Not Found
        </h1>
        <p className="mt-2 text-gray-500">
          Oops! The page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
