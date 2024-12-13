import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';


const StudentCourses = () => {
    const courses = [
        {
          id: 1,
          title: "React",
          description: "A JavaScript library for building user interfaces.",
          progress: 80,
          rating: 4.5,
          image: "/react.jpg",
        },
        {
          id: 2,
          title: "Java",
          description:
            "A high-level, class-based, object-oriented programming language.",
          progress: 20,
          rating: 3,
          image: "/java.jpg",
        },
        {
          id: 3,
          title: "Nodejs",
          description:
            "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
          progress: 40,
          rating: 5,
          image: "/nodejs.jpg",
        },
        {
          id: 4,
          title: "Mongodb",
          description:
            "A source-available cross-platform document-oriented database program.",
          progress: 0,
          rating: 4,
          image: "mongodb.png",
        },
        {
          id: 5,
          title: "HTML",
          description:
            "The standard markup language for documents designed to be displayed in a web browser.",
          progress: 0,
          rating: 2.5,
          image: "/html.jpg",
        },
        {
          id: 6,
          title: "AWS",
          description:
            "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
          progress: 0,
          rating: 3.5,
          image: "/aws.jpg",
        },
        {
          id: 7,
          title: "CSS",
          description:
            "A style sheet language used for describing the presentation of a document written in HTML or XML.",
          progress: 90,
          rating: 4,
          image: "/css.jpg",
        },
        {
          id: 8,
          title: "Angular",
          description:
            "A platform for building mobile and desktop web applications.",
          progress: 80,
          rating: 4.8,
          image: "/angular.jpg",
        },
      ];
    
      const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (rating >= i) {
            stars.push(<FaStar key={i} style={{ color: "gold" }} />);
          } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt
                 key={i} style={{ color: "gold" }} />);
          } else {
            stars.push(<FaRegStar key={i} style={{ color: "gold" }} />);
          }
        }
        return stars;
      };
  return (
    <div
      style={{
        marginLeft: "20%",
        padding: "20px",
        paddingTop: "76px",
        height: "auto",
      }}
    >
      <div className="d-flex gap-5">
        <h4>Enrolled Courses</h4>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="card"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              width: "100%",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={course.image}
              className="card-img-top"
              alt={course.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <div className="card-body" style={{ textAlign: "center", flex: 1 }}>
              <h5
                className="card-title"
                style={{ fontSize: "16px", margin: "10px 0" }}
              >
                {course.title}
              </h5>
              <p
                className="card-text"
                style={{ fontSize: "14px", margin: "10px 0" }}
              >
                {course.description}
              </p>
              <div className="d-flex align-items-center justify-content-center mb-2">
                {renderStars(course.rating)}
              </div>
            </div>
            <div>
              <div
                className="progress mb-3"
                style={{ height: "10px", borderRadius: "5px" }}
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${course.progress}%` }}
                  aria-valuenow={course.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {course.progress}%
                </div>
              </div>
              <a
                href="#"
                className="btn btn-primary"
                style={{ fontSize: "14px", width: "100%" }}
              >
                {course.progress === 0 ? "Start Learning" : "Continue Learning"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentCourses