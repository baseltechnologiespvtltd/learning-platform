import React from "react";
import Button from "./Button/index";
const TutorQuiz = () => {
  return (
    <div
      className="container"
      style={{
        padding: "20px",
        paddingTop: "76px",
        height: "auto",
        marginLeft: "20%",
        width: "100%",
        maxWidth: "80%",
      }}
    >
      <h2 className="mb-4">Quiz Form</h2>
      <form className="shadow p-4 rounded bg-light">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter the title here..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter the description here..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select className="form-select" id="status">
                <option value="" disabled selected>
                  Select status
                </option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="mt-2">
            <button type="submit" className="btn btn-primary">
              save
            </button>
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </form>
      <h2 className="mb-2 mt-4">Quiz Questions</h2>
      <form className="shadow p-4 rounded bg-light">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter the title here..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter the description here..."
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Questions
              </label>
              <select className="form-select" id="status">
                <option value="" disabled selected>
                  Select Questions
                </option>
                <option value="true">Question-1</option>
                <option value="false">Question-2</option>
                <option value="false">Question-3</option>
                <option value="false">Question-4</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column col-md-6 gap-3">
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Add Question
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter the description here..."
              />
            </div>
            <div className="d-flex gap-2 justify-content-end">
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Add Question
                </button>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-danger">
                  Delete Question
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="mt-2">
            <button type="submit" className="btn btn-primary">
              save
            </button>
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </form>
      <h2 className="mb-2 mt-4">Quiz Answers</h2>
      <form className="shadow p-4 rounded bg-light">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Option-1
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Option-2
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Option-3
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Option-4
              </label>
            </div>
          </div>
          <div className="d-flex flex-column col-md-12 gap-3">
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Add Option
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter the description here..."
              />
            </div>
            <div className="d-flex gap-2 justify-content-end">
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Add Option
                </button>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-danger">
                  Delete Option
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="mt-2">
            <button type="submit" className="btn btn-primary">
              save
            </button>
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Button />
        </div>
      </form>
    </div>
  );
};

export default TutorQuiz;
