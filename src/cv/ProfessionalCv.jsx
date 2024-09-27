import React, { useEffect } from "react";

const ProfessionalCv = ({ personalDetails }) => {
  useEffect(() => {
    console.log(personalDetails);
  });

  return (
    <div className="cv-page">
      <div className="cv-page__container">
        <section>
          <div className="general-information">
            <div>
              <h1>{personalDetails.name}</h1>
              <h2>{personalDetails.profession}</h2>
            </div>
            <div>
              <p>{personalDetails.email}</p>
              <p>{personalDetails.number}</p>
              <p>{personalDetails.website}</p>
            </div>
          </div>
        </section>

        <br />

        <section>
          <div className="work-information">
            <h3>Experience</h3>
            <ul>
              {personalDetails.work.map((work, index) => (
                <li key={index}>
                  <div className="work-information__title">
                    <h3>
                      {work.company} | {work.position}
                    </h3>
                    <p>
                      {work.startDate} - {work.endDate}
                    </p>
                  </div>
                  <p>{work.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <br />

        <section>
          <div className="skill-information">
            <h3>Skills</h3>
            <div>
              {personalDetails.skill.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>
        </section>

        <br />

        <section>
          <div className="education-information">
            <h3>Education</h3>
            {personalDetails.education.map((education, index) => (
              <div>
                <div>
                  <p>{education.school}</p>
                  <p>
                    {education.startDate} - {education.endDate}
                  </p>
                </div>
                <p>{education.course}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfessionalCv;
