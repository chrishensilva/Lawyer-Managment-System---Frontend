import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import "../pages/dashboard/Dashboard.css";
import icon from "../assets/icon2.png";

function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="top-nav">
        <div className="nav-left">
          <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle Menu">
            ☰
          </button>
          <img src={icon} alt="App Icon" className="app-icon" />
          <h2 className="nav-title">Case Management System</h2>
        </div>
      </div>

      <div className="body-wrapper">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="main-body" onClick={() => isSidebarOpen && setSidebarOpen(false)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
