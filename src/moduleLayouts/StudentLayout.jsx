import React from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../Components/StudentComponents/StudentSidebar";

const StudentLayout = () => {
  return (
    <div className="d-flex">
      <StudentSidebar />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
