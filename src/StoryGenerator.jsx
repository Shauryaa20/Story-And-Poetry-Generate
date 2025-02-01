import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './StoryGenerator.css';
import { useNavigate } from 'react-router-dom';

function StoryGenerator() {
  const [storiesGenerated, setStoriesGenerated] = useState([
    // Sample data - replace with your actual story data
    { id: 1, title: "The Dragon's Quest" },
    { id: 2, title: "Space Adventure" }
  ]);
  const [genre, setGenre] = useState('');
  const [char, setChar] = useState('');
  const [plot, setPlot] = useState(''); 
  // const [story, setStory] = useState('');

  const navigate = useNavigate();
  
      const goToStoryGen = () => {
          navigate("/story-gen", { state: { numCharacters:char, storyPlot:plot, genre } });
      }

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
      {/* <Sidebar storiesGeneratedHeader={storiesGenerated} /> */}

      <div className="main-content">
        <div className="story-heading1">
          <h1 className="heading1-h1">Story Generator</h1>
          {/* <h2 className="heading2-h2">Create your own unique story with AI</h2> */}
        </div>

        <div className="story-form-container">
          <form>
            <div className="form-group">
              <label className="form-label">Genre</label>
              <select onChange={(e) => setGenre(e.target.value)}className="form-select">
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
                onChange={(e) => setChar(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Story Plot</label>
              <textarea
                className="form-textarea"
                placeholder="Describe your story plot..."
                onChange={(e) => setPlot(e.target.value)}
              />
            </div>

            <button type="submit" onClick={goToStoryGen} className="generate-button">
              Generate Story
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StoryGenerator;