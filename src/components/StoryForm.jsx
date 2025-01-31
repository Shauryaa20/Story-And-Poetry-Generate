import React from "react";
import { useState } from "react";
import './StoryForm.css'
import { handleDropdownChange } from "../utils/dropdownHandler";

function StoryForm ({ genreList }) {
    return (
        <>
            <div className="sidebar">
                <h2>Story Elements</h2>
                <p>Create your story by filling out the form with your desired elements:</p>
                <ul>
                    <li>Choose a genre or create a custom one</li>
                    <li>Specify the number of characters</li>
                    <li>Describe your story plot</li>
                </ul>
            </div>
            <div className="story-gen-form-container">
                <h1 className="story-gen-heading">Story Generator</h1>
                <div className="story-gen-form-layout-helper">
                    <form action="post" className="story-gen-form">
                        {/* Keep existing form content */}
                        <div className="story-gen-form-fieldset-layout-helper">
                            <fieldset>
                                <legend>Genre</legend>
                                <select name="StoryGenre" id="story-genre" onChange={(e) => handleDropdownChange(e)}>
                                    <optgroup label="Presets">
                                    { genreList.map(element => {
                                        return (<option value={"presetGenre".concat(element)} key={element} id={element}>{element}</option>);
                                    })}
                                    </optgroup>
                                    <optgroup label="Custom">
                                        <option value="customGenreCustom">Custom...</option>
                                    </optgroup>
                                </select>
                                <label htmlFor="custom-genre-value" className="story-genre-custom-textbox">Custom Value</label>
                                <input type="text" name="customGenreValue" className="story-genre-custom-textbox" id="custom-genre-value" placeholder="Space Odyssey"/>
                            </fieldset>
                            <fieldset>
                                <legend>Characters</legend>
                                <input type="number" id="num-characters-button" placeholder="Number of Characters"/>
                            </fieldset>
                            <fieldset>
                                <legend>Story Plot</legend>
                                <textarea name="StoryPlot" id="story-plot-textarea" rows="8"></textarea>
                            </fieldset>
                        </div>
                        <input type="submit" value="Generate" id="story-submit-button"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default StoryForm;