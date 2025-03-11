import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import BlockClient from "./componets/BlockClient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BlockClient" element={<BlockClient />} />
      </Routes>
    </Router>
  );
}

export default App;
