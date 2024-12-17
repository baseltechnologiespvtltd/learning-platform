import React from "react";

const StudentDashboard = () => {
  const features = [
    { title: "My Profile", icon: "bi-person-circle", link: "/profile" },
    { title: "My Courses", icon: "bi-journal-bookmark", link: "/courses" },
    { title: "My Wishlist", icon: "bi-heart", link: "/wishlist" },
    { title: "My Reviews", icon: "bi-star", link: "/reviews" },
    { title: "My Quizzes", icon: "bi-question-circle", link: "/quizzes" },
    { title: "Order History", icon: "bi-clock-history", link: "/orderhistory" },
  ];

  return (
    <div className="container py-4">
      <h1 className="mt-24">Student Dashboard</h1>
      <div className="row g-4 ">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className={`bi ${feature.icon} display-4 mb-3`}></i>
                <h5 className="card-title">{feature.title}</h5>
                <a href={feature.link} className="btn btn-primary mt-3">
                  Go to {feature.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
