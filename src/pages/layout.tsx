import React from "react";
import Sidebar from "../components/Sidebar";

interface AppLayoutProps {
  // Define other props here if there are any
  children: React.ReactNode; // This line ensures that children are accepted
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
};

export default AppLayout;
