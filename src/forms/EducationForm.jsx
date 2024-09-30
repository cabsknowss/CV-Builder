import React, { useState } from "react";

const EducationForm = ({ educationForm, setEducationForm, setForm }) => {
  const [educationNum, setEducationNum] = useState(1);
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleNextButton = (e) => {
    if (!course || !school || !startDate || !endDate) return;
    e.preventDefault();
    const newEducation = { course, school, startDate, endDate };
    setEducationForm([...educationForm, newEducation]);
    setForm("WorkForm");
  };

  const handleAddButton = (e) => {
    if (!course || !school || !startDate || !endDate) return;
    e.preventDefault();
    const newEducation = { course, school, startDate, endDate };
    setEducationForm([...educationForm, newEducation]);

    setEducationNum((e) => e + 1);
    setCourse("");
    setSchool("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div>
      <div className="form-inputs__title">
        <h3>
          Education <span style={{ fontSize: "1rem" }}>[{educationNum}]</span>
        </h3>
        <button type="add" onClick={handleAddButton}>
          Add
        </button>
      </div>

      <form action="" onSubmit={handleNextButton}>
        <div className="form-inputs__sections">
          <label htmlFor="course">
            1. Course Program<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setCourse(event.target.value)}
            value={course}
            type="text"
            placeholder="Enter your course."
            required
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="school">
            2. School<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setSchool(event.target.value)}
            value={school}
            type="text"
            placeholder="Enter your school."
            required
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="startdate">
            3. Date Started<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setStartDate(event.target.value)}
            value={startDate}
            type="month"
            placeholder="Enter your starting date."
            required
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="enddate">
            4. Date Ended<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setEndDate(event.target.value)}
            value={endDate}
            type="month"
            placeholder="Enter your finish date."
            required
          />
        </div>

        <div className="form-inputs__buttons">
          <button type="next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
