import React from "react";
import { FaTrash } from "react-icons/fa";


const StudentQuizes = () => {
  const quizData = [
    {
      quizName: "Quiz-1",
      questions: 10,
      totalMarks: 100,
      correctAnswers: 8,
      incorrectAnswers: 2,
      earnedMarks: 80,
    },
    {
      quizName: "Quiz-2",
      questions: 5,
      totalMarks: 50,
      correctAnswers: 2,
      incorrectAnswers: 3,
      earnedMarks: 20,
    },
    {
      quizName: "Quiz-3",
      questions: 10,
      totalMarks: 100,
      correctAnswers: 6,
      incorrectAnswers: 4,
      earnedMarks: 60,
    },
  ];

  const getResult = (earnedMarks) => {
    return earnedMarks >= 50 ? (
      <button className="btn btn-success btn-sm">Pass</button>
    ) : (
      <button className="btn btn-danger btn-sm">Fail</button>
    );
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
      <h4 className="mb-4">My Quiz Attempts</h4>
      <table className="table table-striped table-hover">
        <thead className="table-primary">
          <tr>
            <th scope="col">Quiz Info</th>
            <th scope="col">Questions</th>
            <th scope="col">Total Marks</th>
            <th scope="col">Correct Answers</th>
            <th scope="col">Incorrect Answers</th>
            <th scope="col">Earned Marks</th>
            <th scope="col">Result</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {quizData.map((quiz, index) => (
            <tr key={index}>
              <th scope="row">{quiz.quizName}</th>
              <td>{quiz.questions}</td>
              <td>{quiz.totalMarks}</td>
              <td>{quiz.correctAnswers}</td>
              <td>{quiz.incorrectAnswers}</td>
              <td>{quiz.earnedMarks}</td>
              <td>{getResult(quiz.earnedMarks)}</td>
              <td className="d-flex align-items-center gap-2">
                <button className="btn btn-warning btn-sm">Details</button>
                <button className="btn btn-danger btn-sm d-flex align-items-center me-1">
                  Delete <FaTrash className="ml-2" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentQuizes;
