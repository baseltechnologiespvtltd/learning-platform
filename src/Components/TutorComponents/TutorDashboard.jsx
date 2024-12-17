import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TutorDashboard = () => {
  const navigate = useNavigate();
  const cards = [
    { title: "Profile", text: "Manage your profile settings." },
    { title: "Courses", text: "View and manage your courses." },
    { title: "Lectures", text: "Access your lecture content." },
    { title: "Modules", text: "Organize your teaching modules." },
    { title: "Assignments", text: "Create and grade assignments." },
    { title: "Quiz", text: "Prepare and evaluate quizzes." },
    { title: "Reviews", text: "Check student feedback and reviews." },
  ];

  // Handler for button clicks
  const handleCardClick = (cardTitle) => {
    switch (cardTitle) {
      case "Profile":
        navigate("profile");
        // Add navigation logic, e.g., navigate("/profile");
        break;
      case "Courses":
        navigate("courses");
        // Add navigation logic, e.g., navigate("/courses");
        break;
      case "Lectures":
        navigate("lecture");
        // Add navigation logic, e.g., navigate("/lectures");
        break;
      case "Modules":
        navigate("module");
        // Add navigation logic, e.g., navigate("/modules");
        break;
      case "Assignments":
        navigate("Assignment");
        // Add navigation logic, e.g., navigate("/assignments");
        break;
      case "Quiz":
        navigate("quiz");
        // Add navigation logic, e.g., navigate("/quiz");
        break;
      case "Reviews":
        navigate("review");
        // Add navigation logic, e.g., navigate("/reviews");
        break;
      default:
        // Handle invalid selection or do nothing
        break;
    }
  };

  return (
    <div
      className="bg-light p-4"
      style={{
        marginLeft: "20%",
        marginTop: "76px",
        minHeight: "100vh",
      }}
    >
      <h1 className="mb-4">Dashboard</h1>
      <p>Welcome to the dashboard. This is where the content goes.</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => handleCardClick(card.title)}
                >
                  View {card.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorDashboard;
