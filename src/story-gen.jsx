import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useLocation } from 'react-router-dom';
import { generateStory } from './backend/backend';

const StoryGenerator = () => {
  // const [genre, setGenre] = useState('');
  // const [numCharacters, setNumCharacters] = useState(2);
  // const [storyPlot, setStoryPlot] = useState('');
  // const [story, setStory] = useState('');
  const location = useLocation();
  const genre = location.state.genre;
  const numCharacters = location.state.numCharacters;
  const storyPlot = location.state.storyPlot || 'default';
  const [story, setStory] = useState('');

  useEffect(() => {
    generateStory(setStory, genre, numCharacters, storyPlot);
  }, []);

  return (
    <div>
      {/* <h1>Story Generator</h1>
      <div>
        <label htmlFor="genre">Genre:</label>
        <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Select a genre</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Adventure">Adventure</option>
        </select>
      </div>
      <div>
        <label htmlFor="numCharacters">Number of Characters:</label>
        <input
          id="numCharacters"
          type="number"
          min="1"
          max="10"
          value={numCharacters}
          onChange={(e) => setNumCharacters(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="storyPlot">Story Plot (optional):</label>
        <textarea
          id="storyPlot"
          value={storyPlot}
          onChange={(e) => setStoryPlot(e.target.value)}
          placeholder="Describe your story plot..."
        />
      </div>
      <button onClick={generateStory}>Generate Story</button> */}
      {story && (
        <div>
          <h2>Generated Story:</h2>
          <p>{story}</p>
        </div>
      )}
    </div>
  );
};

export default StoryGenerator;