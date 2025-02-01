import React, { useState, useEffect } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
import { generatePoem } from './backend/backend';
import { useLocation } from 'react-router-dom';

const PoemGenerator = () => {
  // const [genre, setGenre] = useState('');
  // const [prompt, setPrompt] = useState('');
  // const [wordLimit, setWordLimit] = useState(100);
  const [poem, setPoem] = useState('');
  const location = useLocation();
  const genre = location.state.genre;
  const prompt = location.state.prompt;
  const wordLimit = location.state.wordLimit;

  const generate = async () => {generatePoem(setPoem, genre, prompt, wordLimit)};
  useEffect(() => {
    generate();
  }, []);

  return (
    <div>
      {/* <h1>Poem Generator</h1>
      <div>
        <label htmlFor="genre">Genre:</label>
        <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Select a genre</option>
          <option value="rhyming couplet">Rhyming Couplet</option>
          <option value="free verse">Free Verse</option>
          <option value="sonnet">Sonnet</option>
          <option value="love poem">Love Poem</option>
          <option value="acrostic">Acrostic</option>
        </select>
      </div>
      <div>
        <label htmlFor="prompt">Prompt (optional):</label>
        <input
          id="prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="wordLimit">Word Limit:</label>
        <input
          id="wordLimit"
          type="number"
          value={wordLimit}
          onChange={(e) => setWordLimit(Number(e.target.value))}
        />
      </div>
      <button onClick={generate}>Generate Poem</button> */}
      {poem && (
        <div>
          <h2>Generated Poem:</h2>
          <p>{poem}</p>
        </div>
      )}
    </div>
  );
};

export default PoemGenerator;