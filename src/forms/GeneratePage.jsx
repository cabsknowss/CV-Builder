import React from "react";

const GeneratePage = ({ submitForms }) => {
  return (
    <div className="generate-page">
      <button className="generate-page__btn" onClick={submitForms}>
        generate
      </button>
    </div>
  );
};

export default GeneratePage;
