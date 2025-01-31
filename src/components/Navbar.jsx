// import React, { useState, useEffect } from "react";
// import Form from "./Form";

// const Navbar = (props) => {
//     const [isClicked, setIsClicked] = useState(null);
//     const [showForm, setShowForm] = useState(false);    
//     const [genre, setGenre] = useState("");

//     const handlePoemClick = (type) => {
//         setShowForm(true);
//         setGenre(type);
//     };  

//     const closeForm = () => {
//         setShowForm(false);
//     }  

//     const Hamburger = (dropdown) => {
//         setIsClicked(isClicked === dropdown ? null : dropdown)
//     }

//     const handleOutsideClick = (e) => {
//         if (!e.target.closest(".navbar-item")) {
//             setIsClicked(null); 
//         }
//     };

//     useEffect(() => {
//         document.addEventListener("click", handleOutsideClick); 
//         return () => {
//             document.removeEventListener("click", handleOutsideClick); 
//         };
//     }, []);

//     return (
//         <div className="navbar">
//             <img src="/Domain-Expanders.jpg" alt="Logo" className="logo" width={100}></img>
//             <div className="navbar-text">
//                 <p className="navbar-p" onClick={(e) => {e.stopPropagation(); Hamburger("popular")}}>Popular</p>
//                 {isClicked === "popular" && (
//                     <div className="hamburger1">
//                         <p onClick={() => handlePoemClick("Quick Poem")}>Quick Poem</p>
//                         <p onClick={() => handlePoemClick("Free Verse")}>Free Verse</p>
//                     </div>
//                 )}
//                 <p className="navbar-p" onClick={(e) => {e.stopPropagation(); Hamburger("structured")}}>Structured</p>
//                 {isClicked === "structured" && (
//                     <div className="hamburger2">
//                         <p onClick={() => handlePoemClick("Sonnet")}>Sonnet</p>
//                         <p onClick={() => handlePoemClick("Rhyming Couplets")}>Rhyming Couplets</p>
//                         <p onClick={() => handlePoemClick("Acrostic")}>Acrostic</p>
//                     </div>
//                 )}
//                 <p className="navbar-p" onClick={(e) => {e.stopPropagation(); Hamburger("themes")}}>Themes</p>
//                 {isClicked === "themes" && (
//                     <div className="hamburger3">
//                         <p onClick={() => handlePoemClick("Love Poem")}>Love Poem</p>
//                     </div>
//                 )}
//             </div>   
//             {showForm && (
//                 <>
//                     <div className="overlay" onClick={closeForm}></div>
//                     <div className="form-container">
//                         <Form gen={genre}/>
//                     </div>
//                 </>
//             )}  
//         </div>
//     );
// }

// export default Navbar;
import React, { useState, useEffect } from "react";
import Form from "./Form";

const Navbar = (props) => {
    const [isClicked, setIsClicked] = useState(null);
    const [showForm, setShowForm] = useState(false);    
    const [genre, setGenre] = useState("");

    const handlePoemClick = (type) => {
        setShowForm(true);
        setGenre(type);
    };  

    const closeForm = () => {
        setShowForm(false);
    }  

    const Hamburger = (dropdown) => {
        setIsClicked(isClicked === dropdown ? null : dropdown);
    }

    const handleOutsideClick = (e) => {
        if (!e.target.closest(".navbar-item")) {
            setIsClicked(null); 
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick); 
        return () => {
            document.removeEventListener("click", handleOutsideClick); 
        };
    }, []);

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-text">
                    <p className="navbar-p" onClick={(e) => {e.stopPropagation(); Hamburger("popular")}}>Popular</p>
                    {isClicked === "popular" && (
                        <div className="hamburger1">
                            <p onClick={() => handlePoemClick("Quick Poem")}>Quick Poem</p>
                            <p onClick={() => handlePoemClick("Free Verse")}>Free Verse</p>
                        </div>
                    )}
                    <p className="navbar-p" onClick={(e) => {e.stopPropagation(); Hamburger("structured")}}>Structured</p>
                    {isClicked === "structured" && (
                        <div className="hamburger2">
                            <p onClick={() => handlePoemClick("Sonnet")}>Sonnet</p>
                            <p onClick={() => handlePoemClick("Rhyming Couplets")}>Rhyming Couplets</p>
                            <p onClick={() => handlePoemClick("Acrostic")}>Acrostic</p>
                        </div>
                    )}
                    <p className="navbar-p" onClick={(e) => {e.stopPropagation(); Hamburger("themes")}}>Themes</p>
                    {isClicked === "themes" && (
                        <div className="hamburger3">
                            <p onClick={() => handlePoemClick("Love Poem")}>Love Poem</p>
                        </div>
                    )}
                </div>   
            </div>

            {showForm && (
                <>
                    <div className="overlay" onClick={closeForm}></div>
                    <div className="form-container">
                        <Form gen={genre}/>
                    </div>
                </>
            )}  
        </div>
    );
}

export default Navbar;
