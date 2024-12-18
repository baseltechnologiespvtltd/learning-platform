import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaUsers,
  FaSlidersH,
  FaChartLine,
  FaTable,
  FaAppStore,
  FaSignInAlt,
  FaCogs,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div
      className="bg-dark text-white"
      style={{
        width: "15%",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        overflow: "auto",
        marginTop: "50px",
      }}
    >
      <div className="text-center py-4 border-bottom">
        <img
          src="/tutor.jpg"
          alt="tutor"
          className="rounded-circle mb-2"
          style={{ width: "80px", height: "80px" }}
        />
        <h5 className="mb-0">Hello, Rohit</h5>
      </div>
      <div
        style={{
          overflowY: "auto",
          paddingBottom: "60px",
        }}
      >
        <ul className="nav flex-column w-100 px-3">
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to=""
            >
              <FaTachometerAlt className="me-2" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/admin/mail"
            >
              <FaEnvelope className="me-2" /> Mailbox
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/admin/calender"
            >
              <FaCalendarAlt className="me-2" /> Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/group-chats"
            >
              <FaUsers className="me-2" /> Group Chats
            </Link>
          </li>
          <h5 className="text-secondary">Components</h5>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/forms-charts"
            >
              <FaSlidersH className="me-2" /> Forms & Charts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/tables"
            >
              <FaTable className="me-2" /> Tables
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/apps-widgets"
            >
              <FaAppStore className="me-2" /> Apps & Widgets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/authentication"
            >
              <FaSignInAlt className="me-2" /> Authentication
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/miscellaneous"
            >
              <FaCogs className="me-2" /> Miscellaneous
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white d-flex align-items-center"
              to="/logout"
            >
              <button className="btn btn-danger btn-sm mt-3 w-100">
                Logout
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
