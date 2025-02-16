import { React, useState} from "react";
import Form from "./Form";

const Types = (props) => {
    const [showForm, setShowForm] = useState(false);    

    const handlePoemClick = () => {
        setShowForm(true);
    };    
    const closeForm = () => {
        setShowForm(false);
    }    

    return (
        <div>
            <div className="poem-type" onClick={handlePoemClick}>
                <img src={props.url} alt="PType" width={200}></img>
                <p>{props.text}</p>
            </div>

            {showForm && (
                    <>
                        <div className="overlay" onClick={closeForm}></div>
                        <div className="form-container">
                            <Form gen={props.text}/>
                        </div>
                    </>
                )}
        </div>        
    );
}

export default Types;
