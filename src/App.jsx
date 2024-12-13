import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentLayout from "./moduleLayouts/StudentLayout";
import StudentDashboard from "./Components/StudentComponents/StudentDashboard";
import StudentProfile from "./Components/StudentComponents/StudentProfile";
import StudentCourses from "./Components/StudentComponents/StudentCourses";
import StudentWishlist from "./Components/StudentComponents/StudentWishlist";
import StudentReview from "./Components/StudentComponents/StudentReview";
import StudentHistory from "./Components/StudentComponents/StudentHistory";
import StudentQuizes from "./Components/StudentComponents/StudentQuizes";
import TutorLayout from "./moduleLayouts/TutorLayout";
import TutorDashboard from "./Components/TutorComponents/TutorDashboard";
import TutorProfile from "./Components/TutorComponents/TutorProfile";
import TutorModules from "./Components/TutorComponents/TutorModules";
import TutorLectures from "./Components/TutorComponents/TutorLectures";
import TutorAssignments from "./Components/TutorComponents/TutorAssignments";
import TutorQuiz from "./Components/TutorComponents/TutorQuiz";
import TutorReview from "./Components/TutorComponents/TutorReview";
import TutorCourses from "./Components/TutorComponents/TutorCourses";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="wishlist" element={<StudentWishlist />} />
          <Route path="review" element={<StudentReview />} />
          <Route path="history" element={<StudentHistory />} />
          <Route path="quize" element={<StudentQuizes />} />
        </Route>

        {/* Tutor routes */}
        <Route path="/tutor" element={<TutorLayout />}>
          <Route index element={<TutorDashboard />} />
          <Route path="profile" element={<TutorProfile />} />
          <Route path="module" element={<TutorModules />} />
          <Route path="lecture" element={<TutorLectures />} />
          <Route path="Assignment" element={<TutorAssignments />} />
          <Route path="quiz" element={<TutorQuiz />} />
          <Route path="review" element={<TutorReview />} />
          <Route path="courses" element={<TutorCourses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;