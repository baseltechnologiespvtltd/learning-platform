import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div
      className="bg-light"
      style={{
        marginLeft: "20%",
        padding: "20px",
        paddingTop: "76px",
        height: "auto",
      }}
    >
      <h1>Dashboard</h1>
      <div className="row mb-2">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">
                View and update your personal information, contact details, and
                account preferences.
              </p>
              <Link to="/student/profile">
                <a href="#" className="btn btn-primary">
                  View My Profile
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Learning</h5>
              <p className="card-text">
                Access all the courses you are enrolled in, track your progress,
                and explore additional learning resources.
              </p>
              <Link to="/student/courses">
                <a href="#" className="btn btn-primary">
                  View My Learnings
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Wishlist</h5>
              <p className="card-text">
                Keep track of the courses, resources, or items you'd like to
                explore later.
              </p>
              <Link to="/student/wishlist">
                <a href="#" className="btn btn-primary">
                  View My Wishlist
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Quizzes</h5>
              <p className="card-text">
                Access all the quizzes you have taken, view your results, and
                track your performance.
              </p>
              <Link to="/student/quize">
                <a href="#" className="btn btn-primary">
                  View My Quizzes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Order History</h5>
              <p className="card-text">
                Review your previous orders, including course purchases and
                other learning materials.
              </p>
              <Link to="/student/history">
                <a href="#" className="btn btn-primary">
                  View My History
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
