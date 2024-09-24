import { useNavigate } from "react-router-dom";
import CvExample from "./assets/img/cv-example.jpg";
import Pen from "./assets/img/pen.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-page__cv">
        <img className="home-page__cv-img" src={CvExample} alt="CV" />
        <img className="home-page__cv-pen" src={Pen} alt="pen" />
      </div>

      <div className="home-page__intro">
        <h1 className="home-page__title">CV BUILDER</h1>
        <p className="home-page__description">
          Create a professional, creative CV in minutes with our CV Builder.
          Simply input your details, and generate a downloadable resume ready
          for print or sharing.
        </p>
        <div>
          <button
            onClick={() => navigate("/getstarted")}
            className="home-page__btn"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
