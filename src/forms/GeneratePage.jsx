import React from "react";

const GeneratePage = ({ submitForms }) => {
  return (
    <div style={generalPageStyle} className="generate-page">
      <button type="next" onClick={submitForms}>
        generate
      </button>
    </div>
  );
};

export default GeneratePage;

const generalPageStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
};
