import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import CvExample from "./assets/img/cv-example.jpg";
import CvExample2 from "./assets/img/cv-example2.jpg";
import Form from "./Form";

const GetStarted = () => {
  const navigate = useNavigate();
  const [template, setTemplate] = useState("");
  const cvCards = [
    {
      format: "Professional",
      img: CvExample,
    },
  ];

  return (
    <>
      <div className="getstarted-page">
        <h1 className="getstarted-page__title">Choose your CV template</h1>

        <section className="getstarted-page__picker">
          {cvCards.map((card, index) => (
            <div
              key={index}
              onClick={() => setTemplate(card.format)}
              className="getstarted-page__template"
            >
              <img className="getstarted-page__img" src={card.img} alt="cv" />
              <h1>{card.format} CV</h1>
            </div>
          ))}
        </section>
      </div>

      <div
        onClick={() => navigate("/CV-Builder")}
        className="getstarted-page__backbtn"
      >
        <ArrowBack />
      </div>

      {template && <Form template={template} setTemplate={setTemplate} />}
    </>
  );
};

export default GetStarted;
