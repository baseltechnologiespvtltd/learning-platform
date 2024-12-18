import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const StudentProfile = () => {
  const profileData = {
    "Registration Date": "2023-06-15",
    "First Name": "venky",
    "Last Name": "maicherla",
    Username: "@venky",
    Email: "venky@gmail.com",
    "Phone Number": "+91 8500080234",
    Skills: "React Developer, MERN Stack Developer",
    Occupation: "Software Engineer",
    Biography:
      "A passionate software developer with expertise in building scalable and efficient web applications.",
  };

  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <h4>my profile</h4>
      <div className="row" style={{ marginLeft: "250px", padding: "30px" }}>
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center shadow p-3 mb-4 bg-light rounded">
            <div>
              <h4 className="text-primary">My Profile</h4>
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/student">
                <button className="btn btn-outline-primary d-flex align-items-center gap-2">
                  <AiOutlineArrowLeft />
                  Back
                </button>
              </Link>
            </div>
          </div>
          <div className="card shadow-lg rounded-3">
            <div className="card-body">
              <div className="row">
                {Object.entries(profileData).map(([key, value]) => (
                  <div className="col-md-6 mb-3" key={key}>
                    <div className="d-flex flex-column">
                      <span
                        className="fw-bold"
                        style={{ color: "#6c757d", fontSize: "0.9rem" }}
                      >
                        {key}:
                      </span>
                      <span
                        className="text-dark"
                        style={{ fontSize: "1rem", fontWeight: "500" }}
                      >
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
