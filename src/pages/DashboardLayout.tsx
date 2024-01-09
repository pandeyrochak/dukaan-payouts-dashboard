import MainDashboard from "@/components/MainDashboard/MainDashboard";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full">
      <SideNavbar isOpen={isSidebarOpen} />
      <div className="flex flex-col grow">
        <TopNavbar toggleSidebar={toggleSidebar} />
        <MainDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
