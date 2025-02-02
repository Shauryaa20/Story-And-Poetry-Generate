import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to GenPie</h1>
        <p>Unleash the creativity of AI in generating captivating stories and poetic verses.</p>
      </header>

      <main>
        <section className="card-section">
          <div className="cards">
            <h2>Generate a Story</h2>
            <p>Looking for an adventurous or heartwarming story? Click below to create your own story.</p>
            <button className="card-button" onClick={() => navigate("/story-generator")}>
              Generate Story
            </button>
          </div>

          <div className="cards">
            <h2>Generate Poetry</h2>
            <p>Let the rhythm and beauty of poetry flow! Click below to create a personalized poem.</p>
            <button className="card-button" onClick={() => navigate("/poetry-generator")}> 
              Generate Poetry
            </button>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 Domain Expanders | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
