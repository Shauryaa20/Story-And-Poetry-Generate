import { React, useState} from "react";
import Types from "./Types";

const Poems = () => {  
    return (
        <div className="main-section">
            <div className="poems">
                <Types text="Free Verse" url="https://www.poem-generator.org.uk/local/images/thumbs/free-verse.jpg" />               
                <Types text="Quick Poem" url="https://www.poem-generator.org.uk/local/images/thumbs/quick-poem.jpg" />                
                <Types text="Rhyming Couplets" url="https://www.poem-generator.org.uk/local/images/thumbs/rhyming-couplets.jpg" />                
                <Types text="Sonnet" url="https://www.poem-generator.org.uk/local/images/thumbs/sonnet.jpg" />                
                <Types text="Love Poem" url="https://www.poem-generator.org.uk/local/images/thumbs/love-poem.jpg" />                
                <Types text="Acrostic" url="https://www.poem-generator.org.uk/local/images/thumbs/acrostic.jpg" />            
            </div>
        </div>
        
    );
}

export default Poems;
