import React, { useEffect } from "react";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

const ProfessionalCv = ({ personalDetails }) => {
  useEffect(() => {
    console.log(personalDetails);
  });

  const options = {
    method: "open",
    resolution: Resolution.HIGH,
    page: {
      format: "letter",
      margin: Margin.NONE,
    },
  };
  const getTargetElement = () => document.getElementById("content-id");

  const dateFormatter = (input) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateSplit = input.split("-");
    return `${months[parseInt(dateSplit[1]) - 1]} ${dateSplit[0]}`;
  };

  const applyLineBreaks = (text) => {
    return text.replace(/(?:\r\n|\r|\n)/g, "<br />");
  };

  return (
    <div className="cv-page">
      <div className="cv-page__container" id="content-id">
        <section>
          <div className="general-information">
            <div>
              <h1>{personalDetails.name}</h1>
              <h2>{personalDetails.profession}</h2>
            </div>
            <div>
              <p>
                <a href={`tel:${personalDetails.number}`}>
                  {personalDetails.number}
                </a>
              </p>
              <a href={`mailto:${personalDetails.email}`}>
                <p>{personalDetails.email}</p>
              </a>
              <a href={personalDetails.website}>
                <p>{personalDetails.website}</p>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="work-information">
            <h2>Experience</h2>
            <ul>
              {personalDetails.work.map((work, index) => (
                <li key={index}>
                  <div className="work-information__title">
                    <h3>
                      {work.company} | <span>{work.position}</span>
                    </h3>
                    <p className="work-information__date">
                      {dateFormatter(work.startDate)} -{" "}
                      {dateFormatter(work.endDate)}
                    </p>
                  </div>
                  <pre style={{ textWrap: "wrap", whiteSpace: "pre-line" }}>
                    {work.description}
                  </pre>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {personalDetails.project.length > 0 && (
          <section>
            <div className="project-information">
              <h2>Project</h2>
              <ul>
                {personalDetails.project.map((project, index) => (
                  <li key={index}>
                    <h3>{project.title}</h3>
                    <pre style={{ textWrap: "wrap", whiteSpace: "pre-line" }}>
                      {project.description}
                    </pre>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section>
          <div className="skill-information">
            <h2>Skills</h2>
            <ul className="skill-information__lists">
              {personalDetails.skill.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        {personalDetails.certification.length > 0 && (
          <section>
            <div className="certification-information">
              <h2>Certification</h2>
              <ul>
                {personalDetails.certification.map((certification, index) => (
                  <li key={index}>
                    <div className="certification-title">
                      <h3>{certification.title}</h3>
                      <p>Issued {dateFormatter(certification.dateIssued)}</p>
                    </div>
                    <p className="certification-institute">
                      {certification.institution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {personalDetails.organization.length > 0 && (
          <section>
            <div className="organization-information">
              <h2>Organization</h2>
              <ul>
                {personalDetails.organization.map((organization, index) => (
                  <li key={index}>
                    <div className="organization-title">
                      <h3>{organization.organization}</h3>
                      <p>
                        {dateFormatter(organization.startDate)} -{" "}
                        {dateFormatter(organization.endDate)}
                      </p>
                    </div>
                    <p className="organization-institute">
                      {organization.position}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section>
          <div className="education-information">
            <h2>Education</h2>
            <ul>
              {personalDetails.education.map((education, index) => (
                <li key={index}>
                  <div className="education-information__title">
                    <h3>{education.course}</h3>
                    <p className="education-information__date">
                      {dateFormatter(education.startDate)} -{" "}
                      {dateFormatter(education.endDate)}
                    </p>
                  </div>
                  <p>{education.school}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="CV__generate-pdf">
        <button
          type="generate"
          onClick={() => generatePDF(getTargetElement, options)}
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
};

export default ProfessionalCv;
