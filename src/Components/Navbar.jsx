import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/HM_Solutions_logo.jpeg"
            alt="hm solutions"
            className="img-fluid"
            style={{ maxHeight: "40px", maxWidth: "40px" }}
          />
          <span className="ms-2">HM Solutions</span>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <form className="d-flex mx-auto my-2 my-lg-0" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item w-100">
              <Link
                className="nav-link d-flex align-items-center"
                to="/student"
              > Student
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                admin
              </a>
            </li>
            <li className="nav-item w-100">
              <Link
                className="nav-link  d-flex align-items-center"
                to="/tutor"
              > Tutor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
