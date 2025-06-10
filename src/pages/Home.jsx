import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";

const Home = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="ml-58 flex-1 p-8">
        <DashboardContent />
      </main>
    </div>
  );
};

export default Home;
