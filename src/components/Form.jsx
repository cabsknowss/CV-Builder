import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import GeneralForm from "../forms/GeneralForm";
import EducationForm from "../forms/EducationForm";
import WorkForm from "../forms/WorkForm";
import SkillForm from "../forms/SkillForm";

const Form = (props) => {
  const { setTemplate } = props;

  const [form, setForm] = useState("GeneralForm");
  const [generalForm, setGeneralForm] = useState({});
  const [educationForm, setEducationForm] = useState([]);
  const [workForm, setWorkForm] = useState([]);
  const [skillForm, setSkillForm] = useState([]);
  const [formCompleted, setFormCompleted] = useState(false);

  return (
    <div className="form-page">
      <div className="form-container">
        <section className="form-header">
          <h2>Resume Forms</h2>
          <p>Input Your Details</p>
        </section>

        <div className="form-inputs">
          {form === "GeneralForm" && (
            <GeneralForm setGeneralForm={setGeneralForm} setForm={setForm} />
          )}

          {form === "EducationForm" && (
            <EducationForm
              educationForm={educationForm}
              setEducationForm={setEducationForm}
              setForm={setForm}
            />
          )}

          {form === "WorkForm" && (
            <WorkForm
              workForm={workForm}
              setWorkForm={setWorkForm}
              setForm={setForm}
            />
          )}

          {form === "SkillForm" && (
            <SkillForm setSkillForm={setSkillForm} setForm={setForm} />
          )}
        </div>
      </div>

      <div onClick={() => setTemplate("")} className="getstarted-page__backbtn">
        <ArrowBack />
      </div>
    </div>
  );
};

export default Form;
