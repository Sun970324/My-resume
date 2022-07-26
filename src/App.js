import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutme" element={<Introduce />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
