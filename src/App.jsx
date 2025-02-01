import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; 
import StoryGenerator from "./StoryGenerator"; 
import PoetryGenerator from "./PoetryPage"; // Import Poetry Generator
import PoemGen from "./poem-gen"; // Import Poem Generator
import StoryGen from "./story-gen"; // Import Story Generator

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story-generator" element={<StoryGenerator />} />
        <Route path="/poetry-generator" element={<PoetryGenerator />} />  {/* Add this line */}
        <Route path="/poem-gen" element={<PoemGen />} />
        <Route path="/story-gen" element={<StoryGen />} />
      </Routes>
    </Router>
  );
}

export default App;
