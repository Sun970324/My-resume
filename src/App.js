import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PairReview from "./Introduce/PairReview";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pairReview" element={<PairReview />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
