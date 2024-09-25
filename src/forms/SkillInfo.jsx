import { useState } from "react";

const SkillInfo = (props) => {
  const { setSkillInfo, setForm } = props;
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");

  const handleAddButton = () => {
    setSkills([...skills, inputSkill]);
    setInputSkill("");
  };

  const handleNextButton = () => {
    setSkillInfo(skills);
    setForm("");
  };
  return (
    <div>
      <h3 className="form-inputs__category">Skills</h3>
      <div className="form-inputs__sections">
        <ul>
          {skills && (
            <li>
              {skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </li>
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
        <button onClick={handleAddButton} className="form-inputs__nextbtn">
          Add Another
        </button>

        <button onClick={handleNextButton} className="form-inputs__nextbtn">
          Next
        </button>
      </div>
    </div>
  );
};

export default SkillInfo;
