import { useState } from "react";

const WorkInfo = (props) => {
  const { workInfo, setWorkInfo, setForm } = props;

  const [workNum, setWorkNum] = useState(1);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleNextButton = () => {
    const newWork = { position, company, startDate, endDate, description };
    setWorkInfo([...workInfo, newWork]);

    setForm("SkillInfo");
  };

  const handleAddButton = () => {
    const newWork = { position, company, startDate, endDate, description };
    setWorkInfo([...workInfo, newWork]);

    setWorkNum((w) => w + 1);
    setPosition("");
    setCompany("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };
  return (
    <div>
      <h3 className="form-inputs__category">Work Experience {workNum}</h3>
      <div className="form-inputs__sections">
        <label htmlFor="position">1. Job Position</label>
        <input
          onChange={(event) => setPosition(event.target.value)}
          value={position}
          type="text"
          placeholder="Enter your job position."
        />
      </div>

      <div className="form-inputs__sections">
        <label htmlFor="company">2. Company</label>
        <input
          onChange={(event) => setCompany(event.target.value)}
          value={company}
          type="text"
          placeholder="Enter your company."
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

      <div className="form-inputs__sections">
        <label htmlFor="description">5. Description</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          type="text"
          placeholder="Enter job description."
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

export default WorkInfo;
