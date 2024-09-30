import React, { useState } from "react";

const OrganizationForm = ({
  organizationForm,
  setOrganizationForm,
  setForm,
}) => {
  const [organizationNum, setOrganizationNum] = useState(1);
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleNextButton = () => {
    if (!organization || !position || !startDate || !endDate) {
      setForm("GeneratePage");
      return;
    }

    const newOrganization = { organization, position, startDate, endDate };
    setOrganizationForm([...organizationForm, newOrganization]);

    setForm("GeneratePage");
  };

  const handleAddButton = () => {
    if (!organization || !position || !startDate || !endDate) return;

    const newOrganization = { organization, position, startDate, endDate };
    setOrganizationForm([...organizationForm, newOrganization]);

    setOrganizationNum((o) => o + 1);
    setOrganization("");
    setPosition("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div>
      <div className="form-inputs__title">
        <h3>
          Organization{" "}
          <span style={{ fontSize: "1rem" }}>[{organizationNum}]</span>
        </h3>
        <button type="add" onClick={handleAddButton}>
          Add
        </button>
      </div>
      <form action="" onSubmit={handleNextButton}>
        <div className="form-inputs__sections">
          <label htmlFor="organization">1. Organization</label>
          <input
            onChange={(event) => setOrganization(event.target.value)}
            value={organization}
            type="text"
            placeholder="Enter your organization name. Disregard if none."
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="position">2. Position</label>
          <input
            onChange={(event) => setPosition(event.target.value)}
            value={position}
            type="text"
            placeholder="Enter your position."
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="start-date">3. Date Started</label>
          <input
            onChange={(event) => setStartDate(event.target.value)}
            value={startDate}
            type="text"
            placeholder="Enter the start date."
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="end-date">4. Date Ended</label>
          <input
            onChange={(event) => setEndDate(event.target.value)}
            value={endDate}
            type="text"
            placeholder="Enter the end date."
          />
        </div>

        <div>
          <button type="next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default OrganizationForm;
