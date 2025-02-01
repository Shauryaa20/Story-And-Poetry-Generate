import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './StoryGenerator.css';

function StoryGenerator() {
  const [storiesGenerated, setStoriesGenerated] = useState([
    // Sample data - replace with your actual story data
    { id: 1, title: "The Dragon's Quest" },
    { id: 2, title: "Space Adventure" }
  ]);
  
  const genreList = [
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Romance",
    "Horror",
    "Adventure",
    "Historical Fiction"
  ];

  return (
    <div className="StoryGenerator">
      <Sidebar storiesGeneratedHeader={storiesGenerated} />

      <div className="main-content">
        <div className="story-heading1">
          <h1 className="heading1-h1">Story Generator</h1>
          {/* <h2 className="heading2-h2">Create your own unique story with AI</h2> */}
        </div>

        <div className="story-form-container">
          <form>
            <div className="form-group">
              <label className="form-label">Genre</label>
              <select className="form-select">
                {genreList.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Number of Characters</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter number of characters"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Story Plot</label>
              <textarea
                className="form-textarea"
                placeholder="Describe your story plot..."
              />
            </div>

            <button type="submit" className="generate-button">
              Generate Story
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StoryGenerator;