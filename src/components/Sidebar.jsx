import React from "react";
import { useState } from "react";
import './Sidebar.css'

function Sidebar({ storiesGeneratedHeader }) {
    const [titles, setTitles] = useState(
        storiesGeneratedHeader.map(val => val.title)
    );

    const [ids, setIDs] = useState(
        storiesGeneratedHeader.map(val => val.id)
    );

    return (
        <div className="sidebar">
            <span className="sidebar-title"><big>Domain Expanders</big></span>
            <ul className="sidebar-story-titles">
            {titles.map((element, index) => {
                return (
                    <li key={index}>
                        <p>{element}</p>
                        <span></span>
                        <button>	
                            &#x1F5D1;
                        </button>
                    </li>
                );
            })}
            </ul>
        </div>
    );
}

export default Sidebar;
