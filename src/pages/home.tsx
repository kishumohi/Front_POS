import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-auto flex-shrink-0 antialiased bg-gray-500 text-gray-800">
        <div className="flex flex-row h-screen">
          <Sidebar />

          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold mb-4">Home Page</h1>
            <p className="text-lg">This is the home page.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
