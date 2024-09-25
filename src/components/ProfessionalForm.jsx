import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import GeneralInfo from "../forms/GeneralInfo";
import EducationInfo from "../forms/EducationInfo";
import WorkInfo from "../forms/WorkInfo";
import SkillInfo from "../forms/SkillInfo";

const ProfessionalForm = (props) => {
  const { setTemplate } = props;

  const [form, setForm] = useState("GeneralInfo");
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);
  console.log(generalInfo);
  console.log(educationInfo);
  console.log(workInfo);

  return (
    <div className="form-page">
      <div className="form-container">
        <section className="form-header">
          <h2>Resume Forms</h2>
          <p>Input Your Details</p>
        </section>

        <div className="form-inputs">
          {form === "GeneralInfo" && (
            <GeneralInfo setGeneralInfo={setGeneralInfo} setForm={setForm} />
          )}

          {form === "EducationInfo" && (
            <EducationInfo
              educationInfo={educationInfo}
              setEducationInfo={setEducationInfo}
              setForm={setForm}
            />
          )}

          {form === "WorkInfo" && (
            <WorkInfo
              workInfo={workInfo}
              setWorkInfo={setWorkInfo}
              setForm={setForm}
            />
          )}

          {form === "SkillInfo" && (
            <SkillInfo setSkillInfo={setSkillInfo} setForm={setForm} />
          )}
        </div>
      </div>

      <div onClick={() => setTemplate("")} className="getstarted-page__backbtn">
        <ArrowBack />
      </div>
    </div>
  );
};

export default ProfessionalForm;
