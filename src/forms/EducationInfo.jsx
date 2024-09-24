import React, { useState } from "react";

const EducationInfo = (props) => {
  const { setEducationInfo, setForm } = props;

  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const handleNextButton = () => {};

  return (
    <div>
      <h3 className="form-inputs__category">Educational Background</h3>
      <div className="form-inputs__sections">
        <label htmlFor="course">1. Course Program</label>
        <input
          onChange={(event) => setCourse(event.target.value)}
          value={course}
          type="text"
          placeholder="Enter your course."
        />
      </div>

      <div className="form-inputs__sections">
        <label htmlFor="school">2. School</label>
        <input
          onChange={(event) => setSchool(event.target.value)}
          value={school}
          type="text"
          placeholder="Enter your school."
        />
      </div>

      <div className="form-inputs__sections">
        <label htmlFor="startdate">3. Date Started</label>
        <input
          onChange={(event) => setStartDate(event.target.value)}
          value={startDate}
          type="text"
          placeholder="Enter your starting date."
        />
      </div>

      <div className="form-inputs__sections">
        <label htmlFor="finishdate">4. Date Finished</label>
        <input
          onChange={(event) => setFinishDate(event.target.value)}
          value={finishDate}
          type="text"
          placeholder="Enter your finish date."
        />
      </div>

      <div>
        <button onClick={handleNextButton} className="form-inputs__nextbtn">
          Next
        </button>
      </div>
    </div>
  );
};

export default EducationInfo;
