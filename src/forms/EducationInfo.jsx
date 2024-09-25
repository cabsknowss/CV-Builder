import React, { useState } from "react";

const EducationInfo = (props) => {
  const { educationInfo, setEducationInfo, setForm } = props;

  const [educationNum, setEducationNum] = useState(1);
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleNextButton = () => {
    const newEducation = { course, school, startDate, endDate };
    setEducationInfo([...educationInfo, newEducation]);

    setForm("WorkInfo");
  };

  const handleAddButton = () => {
    const newEducation = { course, school, startDate, endDate };
    setEducationInfo([...educationInfo, newEducation]);

    setEducationNum((e) => e + 1);
    setCourse("");
    setSchool("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div>
      <h3 className="form-inputs__category">
        Educational Background {educationNum}
      </h3>
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
        <label htmlFor="enddate">4. Date Ended</label>
        <input
          onChange={(event) => setEndDate(event.target.value)}
          value={endDate}
          type="text"
          placeholder="Enter your finish date."
        />
      </div>

      <div className="form-inputs__buttons">
        <button onClick={handleNextButton} className="form-inputs__nextbtn">
          Next
        </button>
        <button onClick={handleAddButton} className="form-inputs__addbtn">
          Add Another
        </button>
      </div>
    </div>
  );
};

export default EducationInfo;
