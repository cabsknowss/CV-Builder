import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-page__intro">
        <h1 className="home-page__title">RESUME BUILDER</h1>
        <div className="home-page__btn-section">
          <button onClick={() => navigate("/getstarted")}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
