import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/HM_Solutions_logo.jpeg"
            alt="hm solutions"
            className="img-fluid"
            style={{ maxHeight: "40px", maxWidth: "40px" }}
          />
          <span className="ms-2 fw-bold text-primary fs-5">HM Solutions</span>
        </Link>
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <form
            className="d-flex mx-auto my-2 my-lg-0 w-50 position-relative"
            role="search"
          >
            <input
              className="form-control rounded-pill border border-primary"
              type="search"
              placeholder="Search for anything..."
              aria-label="Search"
              style={{ paddingLeft: "1rem", paddingRight: "2.5rem" }}
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-primary"
              style={{ cursor: "pointer" }}
            >
              <BiSearch size="1.5rem" />
            </span>
          </form>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/student">
                Student
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/tutor">
                Tutor
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center fw-semibold text-primary"
                to="/login"
              >
                <BiUserCircle size="1.5rem" className="me-1" />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
