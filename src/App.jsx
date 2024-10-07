import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import GetStarted from "./GetStarted";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/CV-Builder" element={<Home />}></Route>
          <Route path="/getstarted" element={<GetStarted />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
