import React from "react";
import AdminSidebar from "../Components/AdminComponents/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="flex-shrink-0">
        <AdminSidebar />
      </div>
      <div className="flex-grow-1 p-3">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
