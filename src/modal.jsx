import { useState } from "react";
import ReactDOM from "react-dom"; // needed for portals
import './modal.css'; // imports the css file for the modal

// this is the modal component
export default function Modal() {

    // make a simple toggle function
    const [modal, setModal] = useState(false); // started by not showing it

    // const = a variable that cannot be changed + variable will store a function
    // toggleModal is the name of the function
    // = () => { It’s a modern, shorter way to define functions (function toggleModal() )
    const toggleModal = () => {

        // when we click on the button we want to toggle the state
        setModal(!modal); // ! = if it is true, it will be false and vice versa 
    }

    // button going here
    return (
        <>
            {/* Button with icon and text */}
            <button className="modal-btn modal-text" onClick={toggleModal}>
                <img
                    src="src/assets/turn-off-icon.png"
                    alt="Windows XP start menu icon"
                    className="footer-icon" // keeps original footer icon size
                /> 
                </button>
                Check out my reference for this page! {/* Text next to icon */}

            {/* Modal overlay, rendered at the end of <body> so it is always on top */}
            {modal && ReactDOM.createPortal(
                <div className="modal-overlay"> {/* covers whole page */}
                    <div className="modal-content"> {/* centers modal content */}
                        <img 
                            src="src/assets/windows-xp.png" 
                            alt="Windows XP reference" 
                            style={{ 
                                width: '500px',
                                height: 'auto', // ensures image maintains aspect ratio
                            }}
                        />
                        <br /> {/* makes sure close is on the bottom */}
                        <button onClick={toggleModal}>Close</button> {/* closes modal */}
                    </div>
                </div>,
                document.body // renders modal outside footer so it sits above all other elements
            )}
        </>
    );
}
