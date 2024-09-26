import { useState } from "react";

const SkillInfo = ({ setSkillForm, setForm }) => {
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");

  const handleAddButton = (e) => {
    e.preventDefault();
    if (!inputSkill) return;
    setSkills([...skills, inputSkill]);
    setInputSkill("");
  };

  const handleSubmitButton = (e) => {
    if (!skills) return;
    e.preventDefault();
    setSkillForm(skills);
    setForm("");
  };
  return (
    <div>
      <h3 className="form-inputs__category">Skills</h3>
      <form action="" onSubmit={handleAddButton}>
        <div className="form-inputs__sections">
          <ul>
            {skills && (
              <div className="form-inputs__lists">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </div>
            )}
          </ul>
          <input
            onChange={(e) => setInputSkill(e.target.value)}
            value={inputSkill}
            type="text"
            placeholder="Enter your answer"
          />
        </div>

        <div className="form-inputs__buttons">
          <button className="form-inputs__nextbtn">Add Another</button>

          <button onClick={handleSubmitButton} className="form-inputs__nextbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillInfo;
