import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaStar,
  FaBook,
  FaTasks,
  FaFileAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const TutorSidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white position-fixed align-items-center"
      style={{
        width: "100%",
        maxWidth: "250px",
        height: "100vh",
        paddingTop: "56px",
        overflowY: "auto",
      }}
    >
      <div className="d-flex flex-column align-items-center text-center mb-4 mt-2">
        <img
          src="/tutor.jpg"
          alt="tutor"
          className="rounded-circle mb-2 mt-2"
          style={{ width: "80px", height: "80px" }}
        />
        <h5>
          Hello,
          <br /> Venkatesh
        </h5>
      </div>
      <ul className="nav flex-column w-100 text-center align-items-center px-3">
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center justify-content-start"
            to=""
          >
            <FaTachometerAlt className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center justify-content-start"
            to="/tutor/profile"
          >
            <FaUser className="me-2" /> Profile
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center"
            to="/tutor/courses"
          >
            <FaBook className="me-2" /> Courses
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center justify-content-start"
            to="/tutor/module"
          >
            <FaBook className="me-2" /> Modules
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center justify-content-start"
            to="/tutor/lecture"
          >
            <FaTasks className="me-2" /> Lectures
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center justify-content-start"
            to="/tutor/assignment"
          >
            <FaFileAlt className="me-2" /> Assignments
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center justify-content-start"
            to="/tutor/quiz"
          >
            <FaQuestionCircle className="me-2" /> Quiz
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center justify-content-start"
            to="/tutor/review"
          >
            <FaStar className="me-2" /> Reviews
          </Link>
        </li>
      </ul>
      <button className="btn btn-danger btn-sm mt-2 mb-3">Logout</button>
    </div>
  );
};

export default TutorSidebar;
