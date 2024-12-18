import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CourseAnalyticsGraph from "./CourseAnalyticsGraph";
import { FaStar } from "react-icons/fa";

// Sample course data
const courses = [
  {
    logo: "U",
    courseName: "UX/UI Designing",
    TotalCourses: "30+",
    logoColor: "#FF8A47",
    viewCourseColor: "#F4D06F",
  },
  {
    logo: "M",
    courseName: "Marketing",
    TotalCourses: "20+",
    logoColor: "#DA3E52",
    viewCourseColor: "#F86679",
  },
  {
    logo: "W",
    courseName: "Web Development",
    TotalCourses: "80+",
    logoColor: "#0683D6",
    viewCourseColor: "#0E9EFD",
  },
  {
    logo: "R",
    courseName: "React Js",
    TotalCourses: "60+",
    logoColor: "#644DFC",
    viewCourseColor: "#735EFC",
  },
];

// Sample teacher data
const teachers = [
  {
    id: 1,
    name: "Virat",
    course: "React Developer",
    image: "/tutor.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Nisha",
    course: "UI/UX Designer",
    image: "/tutor.jpg",
    rating: 4.8,
  },
];

const AdminDashboard = () => {
  return (
    <div
      style={{
        width: "85%",
        marginLeft: "15%",
        marginTop: "50px",
        height: "auto",
      }}
      className="bg-light"
    >
      <div
        className="d-flex justify-content-between align-items-center shadow p-3 mb-4 bg-light rounded position-fixed"
        style={{ width: "100%", zIndex: 1000 }}
      >
        <h5>Admin Dashboard</h5>
      </div>

      <div className="row">
        <div className="col-md-6" style={{ marginTop: "80px" }}>
          <div className="d-flex justify-content-between">
            <div>Popular Courses</div>
            <div>All Courses</div>
          </div>
          {courses.map((course, index) => (
            <div key={index} className="col-md-12 mb-2">
              <div className="card d-flex flex-row align-items-center p-3">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: course.logoColor,
                    width: "50px",
                    height: "50px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {course.logo}
                </div>
                <div className="ms-3 flex-grow-1">
                  <h6 className="fw-bold m-0">{course.courseName}</h6>
                  <small className="text-muted">
                    {course.TotalCourses} courses
                  </small>
                </div>
                <button
                  className="btn btn-warning text-white fw-bold px-3"
                  style={{
                    backgroundColor: course.viewCourseColor,
                    border: "none",
                  }}
                >
                  View Courses
                </button>
                <BsThreeDotsVertical size={20} className="ms-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-6" style={{ marginTop: "80px" }}>
          <h4 className="fw-bold" style={{ fontSize: "1.3rem" }}>
            Top Teachers
          </h4>
          <div className="row">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="col-md-6 mb-4">
                <div className="card shadow-sm d-flex flex-column align-items-center p-4">
                  <div
                    className="d-flex justify-content-center align-items-center mb-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h6 className="fw-bold mb-1">{teacher.name}</h6>
                  <p className="text-muted mb-2">{teacher.course}</p>
                  <div className="d-flex align-items-center mb-3">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={
                          index < Math.floor(teacher.rating)
                            ? "text-warning"
                            : "text-muted"
                        }
                      />
                    ))}
                  </div>
                  <span className="ms-2 text-muted">
                    ({teacher.rating.toFixed(1)})
                  </span>
                  <button className="btn btn-primary mt-3">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-12">
          <CourseAnalyticsGraph />
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
