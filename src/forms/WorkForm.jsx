import { useState } from "react";

const WorkForm = ({ workForm, setWorkForm, setForm }) => {
  const [workNum, setWorkNum] = useState(1);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleNextButton = () => {
    if (!position || !company || !startDate || !endDate || !description) return;
    const newWork = { position, company, startDate, endDate, description };
    setWorkForm([...workForm, newWork]);

    setForm("SkillForm");
  };

  const handleAddButton = () => {
    if (!position || !company || !startDate || !endDate || !description) return;
    const newWork = { position, company, startDate, endDate, description };
    setWorkForm([...workForm, newWork]);

    setWorkNum((w) => w + 1);
    setPosition("");
    setCompany("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };
  return (
    <div>
      <div className="form-inputs__title-add">
        <h3 className="form-inputs__category">Work Experience {workNum}</h3>
        <button className="form-inputs__addbtn" onClick={handleAddButton}>
          Add another
        </button>
      </div>
      <form action="" onSubmit={handleNextButton}>
        <div className="form-inputs__sections">
          <label htmlFor="position">
            1. Job Position<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setPosition(event.target.value)}
            value={position}
            type="text"
            placeholder="Enter your job position."
            required
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="company">
            2. Company<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setCompany(event.target.value)}
            value={company}
            type="text"
            placeholder="Enter your company."
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

        <div className="form-inputs__sections">
          <label htmlFor="description">
            5. Description<span className="required-fields">*</span>
          </label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            type="text"
            placeholder="Enter job description."
          />
        </div>

        <div className="form-inputs__buttons">
          <button className="form-inputs__nextbtn">Next</button>
        </div>
      </form>
    </div>
  );
};

export default WorkForm;
