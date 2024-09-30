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

  const handleNextButton = (e) => {
    e.preventDefault();
    if (skills.length == 0) return;
    setSkillForm(skills);
    setForm("CertificationForm");
  };
  return (
    <div>
      <div className="form-inputs__title">
        <h3>Skills</h3>
        <button onClick={handleAddButton} type="add">
          Add
        </button>
      </div>
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
            required
          />
        </div>
      </form>
      <div>
        <button type="next" onClick={handleNextButton}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SkillInfo;
