import React from "react";

const TutorLectures = () => {
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
      <h2 className="mb-4">Lecture Details</h2>
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
                Type
              </label>
              <select className="form-select" id="type">
                <option value="" selected>
                  Select the file type
                </option>
                <option value="1">Audio</option>
                <option value="2">Video</option>
                <option value="3">PDF</option>
                <option value="4">XML</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                File
              </label>
              <input className="form-control" type="file" id="formFile" />
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

export default TutorLectures;
