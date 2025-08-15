import { useState } from "react";
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

    return (
        <>
            {/* When clicked, it will toggle the modal on/off */}
            <button className="btn-modal" onClick={toggleModal}>
                <img 
                    src="src/assets/start-menu-icon.png" 
                    alt="Windows XP start menu icon" 
                    className="start-menu-icon"
                />
            </button>

            {/* This only shows if 'modal' is true */}
            {modal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>My Modal</h2>
                        <p>This is the content!</p>
                        {/* Clicking this will hide the modal */}
                        <button onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}
