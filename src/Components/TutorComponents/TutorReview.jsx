import React from "react";
import { FaStar } from "react-icons/fa";

const TutorReview = () => {
  const reviews = [
    {
      title: "Great tutor!",
      description:
        "The tutor explained the concepts very clearly. Highly recommended!",
      rating: 5,
      providedBy: "Harini",
      Date: "12-12-2024",
    },
    {
      title: "Very helpful!",
      description:
        "The tutor was very patient and helped me understand difficult topics.",
      rating: 4,
      providedBy: "Mounisha",
      Date: "12-12-2024",
    },
    {
      title: "Amazing experience!",
      description: "I loved the way the tutor made learning fun and easy.",
      rating: 5,
      providedBy: "Venky",
      Date: "12-12-2024",
    },
    {
      title: "Good experience",
      description:
        "The tutor was helpful, but I felt like some areas were not covered well enough.",
      rating: 3,
      providedBy: "Ram",
      Date: "12-12-2024",
    },
  ];
  return (
    <div
      style={{
        marginLeft: "20%",
        padding: "20px",
        paddingTop: "76px",
        height: "auto",
      }}
    >
      <h4>Reviews</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {reviews.map((review, index) => (
          <div key={index} className="col d-flex justify-content-center">
            <div
              className="card shadow-lg mb-4"
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "300px",
                transition: "transform 0.3s ease-in-out",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src="/tutor.jpg"
                    className="img-fluid rounded-circle"
                    alt="reviewer"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-8 d-flex flex-column">
                  <div
                    className="card-body d-flex flex-column"
                    style={{
                      minHeight: "100px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ fontWeight: "bold", color: "#333" }}
                    >
                      {review.title}
                    </h5>
                    <div className="d-flex align-items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-warning" />
                      ))}
                    </div>
                    <p className="card-text" style={{ color: "#555", flex: 1 }}>
                      {review.description}
                    </p>
                    <p className="card-text">
                      <small
                        className="text-muted"
                        style={{ fontStyle: "italic" }}
                      >
                        by: {review.providedBy}
                      </small>
                    </p>
                    <p className="card-text">
                      <small
                        className="text-muted"
                        style={{ fontStyle: "italic" }}
                      >
                        Date: {review.Date}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorReview;
