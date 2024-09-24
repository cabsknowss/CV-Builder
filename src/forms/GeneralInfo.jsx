import { useState } from "react";

const GeneralInfo = (props) => {
  const { setGeneralInfo, setForm } = props;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleNextButton = () => {
    setGeneralInfo({ name, address, number, email, website });
    setForm("EducationInfo");
  };

  return (
    <div>
      <h3 className="form-inputs__category">General Information</h3>
      <div className="form-inputs__sections">
        <label htmlFor="fullname">1. Full name</label>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          placeholder="Enter your name."
        />
      </div>

      <div className="form-inputs__sections">
        <label htmlFor="address">2. Present Address</label>
        <input
          onChange={(event) => setAddress(event.target.value)}
          value={address}
          type="text"
          placeholder="Enter your address."
        />
      </div>

      <div className="form-inputs__sections">
        <label htmlFor="number">3. Contact Number</label>
        <input
          onChange={(event) => setNumber(event.target.value)}
          value={number}
          type="text"
          placeholder="Enter your number."
        />
      </div>

      <div className="form-inputs__sections">
        <label htmlFor="email">4. Email Address</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="text"
          placeholder="Enter your email."
        />
      </div>

      <div className="form-inputs__sections">
        <label htmlFor="website">5. Website</label>
        <input
          onChange={(event) => setWebsite(event.target.value)}
          value={website}
          type="text"
          placeholder="Enter your website. N/A if none."
        />
      </div>

      <div>
        <button onClick={handleNextButton} className="form-inputs__nextbtn">
          Next
        </button>
      </div>
    </div>
  );
};

export default GeneralInfo;
