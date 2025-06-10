import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Your main dashboard content will go here */}
        <h1 className="text-2xl font-bold">Main Content Area</h1>
      </main>
    </div>
  );
};

export default Home;
