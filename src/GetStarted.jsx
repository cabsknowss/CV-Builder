import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CvExample from "./assets/img/cv-example.jpg";
import CvExample2 from "./assets/img/cv-example2.jpg";
import { ArrowBack } from "@mui/icons-material";

const GetStarted = () => {
  const navigate = useNavigate();
  const [template, setTemplate] = useState("");
  return (
    <>
      <div className="getstarted-page">
        <h1 className="getstarted-page__title">Choose your CV template</h1>
        <section className="getstarted-page__picker">
          <div className="getstarted-page__template">
            <img className="getstarted-page__img" src={CvExample2} alt="cv" />
            <h1>Professional CV</h1>
          </div>
          <div className="getstarted-page__template">
            <img className="getstarted-page__img" src={CvExample} alt="cv" />
            <h1>Creative CV</h1>
          </div>
        </section>
        <div onClick={() => navigate("/")} className="getstarted-page__backbtn">
          <ArrowBack />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
