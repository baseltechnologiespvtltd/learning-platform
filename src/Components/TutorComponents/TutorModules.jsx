import React from "react";

const TutorModules = () => {
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
      <h2 className="mb-4">Modules</h2>
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
              <label htmlFor="type" className="form-label">
                lectures
              </label>
              <select className="form-select" id="type">
                <option value="" selected>
                  Select the lectures
                </option>
                <option value="1">lecture-1</option>
                <option value="2">lecture-2</option>
                <option value="3">lecture-3</option>
                <option value="4">lecture-4</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Assignments
              </label>
              <select className="form-select" id="type">
                <option value="" selected>
                  Select the Assignments
                </option>
                <option value="1">Assignment-1</option>
                <option value="2">Assignment-2</option>
                <option value="3">Assignment-3</option>
                <option value="4">Assignment-4</option>
              </select>
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
    </div>
  );
};

export default TutorModules;