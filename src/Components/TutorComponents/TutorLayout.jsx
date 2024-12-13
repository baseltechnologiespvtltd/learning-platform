import React from "react";
import TutorSidebar from "./TutorSidebar";

const TutorLayout = () => {
  return (
    <div className="d-flex">
      <TutorSidebar />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default TutorLayout;
