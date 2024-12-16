import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <nav className="fixed top-0 left-0 h-screen w-64 bg-gray-800 p-4 text-white">
        <ul>
          <li className="mb-4">
            <a href="#" className="block p-4 hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="block p-4 hover:bg-gray-700">
              Settings
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="block p-4 hover:bg-gray-700">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
