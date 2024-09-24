import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import GeneralInfo from "../forms/GeneralInfo";
import EducationInfo from "../forms/EducationInfo";

const ProfessionalForm = (props) => {
  const { setTemplate } = props;

  const [form, setForm] = useState("GeneralInfo");
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  console.log(generalInfo);
  console.log(educationInfo);

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
              setEducationInfo={setEducationInfo}
              setForm={setForm}
            />
          )}

          {/* <section>
            <h3 className="form-inputs__category">Work Experience</h3>
            <div className="form-inputs__sections">
              <label htmlFor="fullname">1. Job Position</label>
              <input type="text" placeholder="Enter your answer" />
            </div>
            <div className="form-inputs__sections">
              <label htmlFor="address">2. Company</label>
              <input type="text" placeholder="Enter your answer" />
            </div>
            <div className="form-inputs__sections">
              <label htmlFor="number">3. Date Started</label>
              <input type="text" placeholder="Enter your answer" />
            </div>
            <div className="form-inputs__sections">
              <label htmlFor="email">4. Date Finished</label>
              <input type="text" placeholder="Enter your answer" />
            </div>
            <div className="form-inputs__sections">
              <label htmlFor="address">5. Description</label>
              <input type="text" placeholder="Enter your answer" />
            </div>
          </section> */}

          {/* <section>
            <h3 className="form-inputs__category">Skills</h3>
            <div className="form-inputs__sections">
              <label htmlFor="fullname">1. Job Position</label>
              <input type="text" placeholder="Enter your answer" />
            </div>
          </section> */}
        </div>
      </div>

      <div onClick={() => setTemplate("")} className="getstarted-page__backbtn">
        <ArrowBack />
      </div>
    </div>
  );
};

export default ProfessionalForm;
