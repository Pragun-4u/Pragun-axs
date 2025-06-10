import React from "react";

const AlertTriangleIcon = (props) => (
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
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ErrorFallbackUI = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex-1 p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-lg w-full text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
          <AlertTriangleIcon className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-slate-800">
          Something went wrong.
        </h2>
        <p className="mt-2 text-gray-500">
          We're sorry for the inconvenience. Our team has been notified, and
          we're working to fix the issue.
        </p>

        {/* Only show detailed error in development mode for debugging */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 p-3 bg-gray-100 rounded-md text-left text-xs overflow-auto">
            <pre className="whitespace-pre-wrap">
              <code>{error.message}</code>
            </pre>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={resetErrorBoundary}
            className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallbackUI
          error={this.state.error}
          resetErrorBoundary={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
