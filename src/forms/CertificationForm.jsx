import React, { useState } from "react";

const CertificationForm = ({
  certificationForm,
  setCertificationForm,
  setForm,
}) => {
  const [certificationNum, setCertificationNum] = useState(1);
  const [title, setTitle] = useState("");
  const [institution, setInstitution] = useState("");
  const [dateIssued, setDateIssued] = useState("");

  const handleNextButton = () => {
    if (!title || !institution || !dateIssued) {
      setForm("OrganizationForm");
      return;
    }

    const newCertification = { title, institution, dateIssues };
    setCertificationForm([...certificationForm, newCertification]);

    setForm("OrganizationForm");
  };

  const handleAddButton = () => {
    if (!title || !institution || !dateIssued) return;

    const newCertification = { title, institution, dateIssued };
    setCertificationForm([...certificationForm, newCertification]);

    setCertificationNum((c) => c + 1);
    setTitle("");
    setInstitution("");
    setDateIssued("");
  };

  return (
    <div>
      <div className="form-inputs__title">
        <h3>
          Certification{" "}
          <span style={{ fontSize: "1rem" }}>[{certificationNum}]</span>
        </h3>
        <button type="add" onClick={handleAddButton}>
          Add
        </button>
      </div>
      <form action="" onSubmit={handleNextButton}>
        <div className="form-inputs__sections">
          <label htmlFor="certificate">1. Certificate Title</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            type="text"
            placeholder="Enter the certificate title. Do not input if not applicable."
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="institution">2. Institution</label>
          <input
            onChange={(event) => setInstitution(event.target.value)}
            value={institution}
            type="text"
            placeholder="Enter the institution."
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="date">3. Date Issued</label>
          <input
            onChange={(event) => setDateIssued(event.target.value)}
            value={dateIssued}
            type="month"
            placeholder="Enter the issued date."
          />
        </div>

        <div>
          <button type="next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default CertificationForm;
