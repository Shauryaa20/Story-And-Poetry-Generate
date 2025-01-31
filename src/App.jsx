import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; 
import StoryGenerator from "./StoryGenerator"; 
import PoetryGenerator from "./PoetryPage"; // Import Poetry Generator

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story-generator" element={<StoryGenerator />} />
        <Route path="/poetry-generator" element={<PoetryGenerator />} />  {/* Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
