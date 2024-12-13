import React from "react";

const TutorCourses = () => {
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
      <h2 className="mb-4">Courses</h2>
      <form className="shadow p-4 rounded bg-light">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Course Title
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
               Course Description
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
              <label htmlFor="type" className="form-label">
                Select Course
              </label>
              <select className="form-select" id="type">
                <option value="" selected>
                  Select the courses
                </option>
                <option value="1">React js</option>
                <option value="2">Angular js</option>
                <option value="3">AWS</option>
                <option value="4">Node js</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Select Module
              </label>
              <select className="form-select" id="status">
                <option value="" disabled selected>
                  Select Module
                </option>
                <option value="true">Module-1</option>
                <option value="false">Module-2</option>
                <option value="false">Module-3</option>
                <option value="false">Module-4</option>
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
    </div>
  );
};

export default TutorCourses;
