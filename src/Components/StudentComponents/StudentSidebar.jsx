import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaBook,
  FaHeart,
  FaStar,
  FaQuestion,
  FaHistory,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const StudentSidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white position-fixed align-items-center"
      style={{
        width: "20%",
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
          <Link className="nav-link text-white d-flex align-items-center" to="">
            <FaTachometerAlt className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center"
            to="/student/profile"
          >
            <FaUser className="me-2" /> My Profile
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center"
            to="/student/courses"
          >
            <FaBook className="me-2" /> My Learning
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center"
            to="/student/wishlist"
          >
            <FaHeart className="me-2" /> My Wishlist
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center"
            to="/student/quize"
          >
            <FaQuestion className="me-2" /> My Quizzes
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link
            className="nav-link text-white d-flex align-items-center"
            to="/student/history"
          >
            <FaHistory className="me-2" /> Order History
          </Link>
        </li>
      </ul>
      <button className="btn btn-danger btn-sm mt-2">Logout</button>
    </div>
  );
};

export default StudentSidebar;
