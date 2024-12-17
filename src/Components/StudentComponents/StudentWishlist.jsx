import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StudentWishlist = () => {
  const courses = [
    {
      id: 1,
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      price: "$49.99",
      rating: 4.5,
      image: "/react.jpg",
      enrolled: false,
    },
    {
      id: 2,
      title: "Java",
      description:
        "A high-level, class-based, object-oriented programming language.",
      price: "$39.99",
      rating: 3,
      image: "/java.jpg",
      enrolled: true,
    },
    {
      id: 3,
      title: "Nodejs",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      price: "$59.99",
      rating: 5,
      image: "/nodejs.jpg",
      enrolled: false,
    },
    {
      id: 4,
      title: "Mongodb",
      description:
        "A source-available cross-platform document-oriented database program.",
      price: "$29.99",
      rating: 4,
      image: "/mongodb.png",
      enrolled: true,
    },
    {
      id: 5,
      title: "HTML",
      description:
        "The standard markup language for documents designed to be displayed in a web browser.",
      price: "$19.99",
      rating: 2.5,
      image: "/html.jpg",
      enrolled: false,
    },
    {
      id: 6,
      title: "AWS",
      description:
        "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
      price: "$69.99",
      rating: 3.5,
      image: "/aws.jpg",
      enrolled: true,
    },
    {
      id: 7,
      title: "CSS",
      description:
        "A style sheet language used for describing the presentation of a document written in HTML or XML.",
      price: "$24.99",
      rating: 4,
      image: "/css.jpg",
      enrolled: false,
    },
    {
      id: 8,
      title: "Angular",
      description:
        "A platform for building mobile and desktop web applications.",
      price: "$59.99",
      rating: 4.8,
      image: "/angular.jpg",
      enrolled: false,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} style={{ color: "gold" }} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} style={{ color: "gold" }} />);
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
        <h4>My Wishlist</h4>
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
              minHeight: "420px",
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
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "10px 0",
                }}
              >
                {course.price}
              </p>
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ gap: "10px" }}
            >
              {course.enrolled ? (
                <button
                  className="btn btn-success"
                  style={{
                    fontSize: "14px",
                    width: "100px",
                    height: "36px",
                  }}
                >
                  Enrolled
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  style={{
                    fontSize: "14px",
                    width: "100px",
                    height: "36px",
                  }}
                >
                  Enroll
                </button>
              )}
              {!course.enrolled && (
                <button
                  className="btn btn-secondary"
                  style={{
                    fontSize: "14px",
                    width: "100px",
                    height: "36px",
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentWishlist;
