import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="w-64 bg-gray-800 text-gray-100 p-4 h-screen">
      <a href="/">
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
      </a>
      <ul>
        <li className="mb-4">
          <a
            href="/core/customer"
            className="text-gray-300 hover:text-gray-100"
          >
            Customer Master
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Inbox
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Messages
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Notifications
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Available Tasks
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Clients
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Profile
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Settings
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
