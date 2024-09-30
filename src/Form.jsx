import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import GeneralForm from "./forms/GeneralForm";
import EducationForm from "./forms/EducationForm";
import WorkForm from "./forms/WorkForm";
import SkillForm from "./forms/SkillForm";
import ProjectForm from "./forms/ProjectForm";
import CertificationForm from "./forms/CertificationForm";
import OrganizationForm from "./forms/OrganizationForm";
import GeneratePage from "./forms/GeneratePage";
import ProfessionalCv from "./cv/ProfessionalCv";

const Form = ({ template, setTemplate }) => {
  const [form, setForm] = useState("GeneralForm");
  const [generalForm, setGeneralForm] = useState({});
  const [workForm, setWorkForm] = useState([]);
  const [educationForm, setEducationForm] = useState([]);
  const [projectForm, setProjectForm] = useState([]);
  const [skillForm, setSkillForm] = useState([]);
  const [certificationForm, setCertificationForm] = useState([]);
  const [organizationForm, setOrganizationForm] = useState([]);

  const [personalDetails, setPersonalDetails] = useState();

  const submitForms = () => {
    console.log(generalForm);
    console.log(educationForm);
    console.log(workForm);
    console.log(skillForm);

    setPersonalDetails({
      ...generalForm,
      education: [...educationForm],
      work: [...workForm],
      skill: [...skillForm],
      project: [...projectForm],
      certification: [...certificationForm],
      organization: [...organizationForm],
    });
  };

  return (
    <>
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

            {form === "ProjectForm" && (
              <ProjectForm
                projectForm={projectForm}
                setProjectForm={setProjectForm}
                setForm={setForm}
              />
            )}

            {form === "CertificationForm" && (
              <CertificationForm
                certificationForm={certificationForm}
                setCertificationForm={setCertificationForm}
                setForm={setForm}
              />
            )}

            {form === "OrganizationForm" && (
              <OrganizationForm
                organizationForm={organizationForm}
                setOrganizationForm={setOrganizationForm}
                setForm={setForm}
              />
            )}

            {form === "GeneratePage" && (
              <GeneratePage submitForms={submitForms} />
            )}
          </div>
        </div>

        <div
          onClick={() => setTemplate("")}
          className="getstarted-page__backbtn"
        >
          <ArrowBack />
        </div>
      </div>

      {personalDetails && <ProfessionalCv personalDetails={personalDetails} />}
    </>
  );
};

export default Form;
