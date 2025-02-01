import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = ({gen}) => {
    const [wordLimit, setWordLimit] = useState(null);
    const [prompt, setPrompt] = useState('');
    const navigate = useNavigate();

    const goToPoemGen = () => {
        navigate("/poem-gen", { state: { wordLimit, prompt, genre: gen } });
    }

    const handleWordLimitClick = (limit) => {
        setWordLimit(limit);
    };

    return (
        <div className="form-container">
            <div className="form">
                <h2 className="genre-title">{gen}</h2>
                <div className="form-group">
                    <label htmlFor="title">Prompt: </label>
                    <input onClick={(e)=>{setPrompt(e.target.value)}} type="text" name="title" id="title" placeholder="Optional" />  

                </div>         
    
                <div className="form-group">
                    <label>Word Limit: </label>
                    <div className="word-limit-options">
                        <button className={`word-limit-btn ${wordLimit === 50 ? "selected" : ""}`} onClick={() => handleWordLimitClick(75)}>75</button>
                        <button className={`word-limit-btn ${wordLimit === 75 ? "selected" : ""}`} onClick={() => handleWordLimitClick(100)}>100</button>
                        <button className={`word-limit-btn ${wordLimit === 100 ? "selected" : ""}`} onClick={() => handleWordLimitClick(125)}>125</button>
                        <button className={`word-limit-btn ${wordLimit === 125 ? "selected" : ""}`} onClick={() => handleWordLimitClick(125)}>150</button>
                    </div>
                </div>       
                <button onClick={goToPoemGen} className="submit-btn">Generate Poem</button>
            </div>
        </div>
    );
}

export default Form;
