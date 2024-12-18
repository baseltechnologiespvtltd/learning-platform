import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const courseAnalytics = [
  { name: "UI/UX Designing", daily: 2325, monthly: 950, yearly: 9000 },
  { name: "Marketing", daily: 4450, monthly: 3240, yearly: 6480 },
  { name: "Web Development", daily: 230, monthly: 1900, yearly: 8400 },
  { name: "React JS", daily: 6540, monthly: 1100, yearly: 6200 },
];

const labels = courseAnalytics.map((course) => course.name);
const dailyData = courseAnalytics.map((course) => course.daily);
const monthlyData = courseAnalytics.map((course) => course.monthly);
const yearlyData = courseAnalytics.map((course) => course.yearly);

const lineChartData = {
  labels,
  datasets: [
    {
      label: "Daily Students",
      data: dailyData,
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
    {
      label: "Monthly Students",
      data: monthlyData,
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
    {
      label: "Yearly Students",
      data: yearlyData,
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Students Joined Per Course (Daily, Monthly, Yearly)",
    },
  },
};

function CourseAnalyticsGraph() {
  return (
    <div className="container">
      <div className="mb-4">
        <h2 className="fw-bold">Course Analytics</h2>
      </div>
      <div className="card shadow-sm p-2 border-0 mb-4">
        <h5 className="fw-bold text-secondary mb-3">
          Enrollment Trends Per Course
        </h5>
        <Line data={lineChartData} options={options} />
      </div>
      <div className="card shadow-sm p-2 border-0">
        <h5 className="fw-bold text-secondary mb-3">Course Summary</h5>
        <div className="table-responsive">
          <table className="table table-striped table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Course Name</th>
                <th>Daily Enrollments</th>
                <th>Monthly Enrollments</th>
                <th>Yearly Enrollments</th>
              </tr>
            </thead>
            <tbody>
              {courseAnalytics.map((course, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{course.name}</td>
                  <td>{course.daily}</td>
                  <td>{course.monthly}</td>
                  <td>{course.yearly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CourseAnalyticsGraph;
