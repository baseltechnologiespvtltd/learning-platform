import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Button = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/tutor");
  };
  return (
    <button
      type="button"
      className="btn active"
      style={{ width: "50%" }}
      data-bs-toggle="button"
      aria-pressed="true"
      onClick={handleCardClick}
    >
      Back
    </button>
  );
};

export default Button;
