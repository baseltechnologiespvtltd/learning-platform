import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentHistory = () => {
  const orders = [
    {
      orderId: "#101",
      courseName: "React for Beginners",
      date: "2024-12-01",
      price: "$49.99",
      status: "Completed",
    },
    {
      orderId: "#102",
      courseName: "Advanced JavaScript",
      date: "2024-11-15",
      price: "$79.99",
      status: "Pending",
    },
    {
      orderId: "#103",
      courseName: "Full-Stack Development",
      date: "2024-10-10",
      price: "$149.99",
      status: "Completed",
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
      <div className="d-flex justify-content-between align-items-center shadow p-3 mb-4 bg-light rounded">
        <div>
          <h4 className="text-primary">My Order History</h4>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/student">
            <button className="btn btn-outline-primary d-flex align-items-center gap-2">
              <AiOutlineArrowLeft />
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-2">
        <div className="d-flex align-items-center gap-3 mb-3">
          <button className="btn btn-primary btn-sm">Today</button>
          <button className="btn btn-secondary btn-sm">Monthly</button>
          <button className="btn btn-secondary btn-sm">Yearly</button>
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control form-control-sm"
            style={{ maxWidth: "200px" }}
          />
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead className="table-info">
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Course Name</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderId}</td>
              <td>{order.courseName}</td>
              <td>{order.date}</td>
              <td>{order.price}</td>
              <td>
                <span
                  className={`badge ${
                    order.status === "Completed"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td>
                <button className="btn btn-danger btn-sm d-flex align-items-center">
                  Delete <FaTrash className="ms-2" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentHistory;
