import React, { useState } from "react";

const Form = (props) => {
    const [wordLimit, setWordLimit] = useState(null);

    const handleWordLimitClick = (limit) => {
        setWordLimit(limit);
    };

    return (
        <div className="form-container">
            <div className="form">
                <h2 className="genre-title">{props.gen}</h2>
                <div className="form-group">
                    <label htmlFor="title">Prompt: </label>
                    <input type="text" name="title" id="title" placeholder="Optional" />  
                </div>         
                <div className="form-group">
                    <label>Word Limit: </label>
                    <div className="word-limit-options">
                        <button className={`word-limit-btn ${wordLimit === 50 ? "selected" : ""}`} onClick={() => handleWordLimitClick(50)}>50</button>
                        <button className={`word-limit-btn ${wordLimit === 75 ? "selected" : ""}`} onClick={() => handleWordLimitClick(75)}>75</button>
                        <button className={`word-limit-btn ${wordLimit === 100 ? "selected" : ""}`} onClick={() => handleWordLimitClick(100)}>100</button>
                        <button className={`word-limit-btn ${wordLimit === 125 ? "selected" : ""}`} onClick={() => handleWordLimitClick(125)}>125</button>
                    </div>
                </div>       
                <button className="submit-btn">Generate Poem</button>
            </div>
        </div>
    );
}

export default Form;
