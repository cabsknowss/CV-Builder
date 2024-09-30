import React, { useState } from "react";

const ProjectForm = ({ projectForm, setProjectForm, setForm }) => {
  const [projectNum, setProjectNum] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleNextButton = () => {
    if (!title || !description) {
      setForm("SkillForm");
      return;
    }
    const newProject = { title, description };
    setProjectForm([...projectForm, newProject]);

    setForm("SkillForm");
  };

  const handleAddButton = () => {
    if (!title || !description) return;
    const newProject = { title, description };
    setProjectForm([...projectForm, newProject]);

    setProjectNum((p) => p + 1);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <div className="form-inputs__title">
        <h3>
          Project <span style={{ fontSize: "1rem" }}>[{projectNum}]</span>
        </h3>
        <button type="add" onClick={handleAddButton}>
          Add
        </button>
      </div>
      <form action="" onSubmit={handleNextButton}>
        <div className="form-inputs__sections">
          <label htmlFor="title">1. Project Title</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            type="text"
            placeholder="Enter the project title. Do not input if not applicable."
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="description">2. Project Description</label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            type="text"
            placeholder="Enter the project description."
          />
        </div>

        <div>
          <button type="next">Next</button>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
