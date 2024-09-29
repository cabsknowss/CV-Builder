import { useState } from "react";

const GeneralForm = ({ setGeneralForm, setForm }) => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleNextButton = (e) => {
    e.preventDefault();
    setGeneralForm({ name, profession, number, email, website });
    setForm("EducationForm");
  };

  return (
    <>
      <div className="form-inputs__title">
        <h3>General Information</h3>
      </div>
      <form action="" onSubmit={handleNextButton}>
        <div className="form-inputs__sections">
          <label htmlFor="fullname">
            1. Full name<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            placeholder="Enter your name."
            required
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="profession">
            2. Profession<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setProfession(event.target.value)}
            value={profession}
            type="text"
            placeholder="Enter your profession."
            required
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="number">
            3. Contact Number<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setNumber(event.target.value)}
            value={number}
            type="number"
            placeholder="Enter your number."
            required
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="email">
            4. Email Address<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email."
            required
          />
        </div>

        <div className="form-inputs__sections">
          <label htmlFor="website">
            5. Website<span className="required-fields">*</span>
          </label>
          <input
            onChange={(event) => setWebsite(event.target.value)}
            value={website}
            type="text"
            placeholder="Enter your website. N/A if none."
            required
          />
        </div>

        <div>
          <button type="next">Next</button>
        </div>
      </form>
    </>
  );
};

export default GeneralForm;
