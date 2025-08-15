import React from "react";
import './Start-background.css';

// for page ref
import { useState } from "react";
import './modal.css'; // imports the css file for the modal
import Modal from './modal.jsx'; // imports the modal component

// windows XP background colours: 
// blue, light blue, light white, gold tint and a flare
function Start() {
return (
    <>
    <div className="windows-logo">
  <div className="s-red-window"></div> 
  <div className="s-lime-window"></div>
  <div className="s-blue-window"></div>
  <div className="s-yellow-window"></div>
</div>
    <div className="s-header"></div> 
    <div className="s-middle"></div>

// footer with text
<div className="s-footer">
  <div className="footer-left">
    <h5>
      <Modal /> {/* replaces the Windows XP power button image */}
    </h5>
  </div>

  <div className="footer-right">
    <h5>
      Thanks for checking out my page!
      <br />
      I hope you like it!
    </h5>
  </div>
</div>



    <div className="s-flare"></div>
    <div className="s-white-line"></div>

// start text

    <div className="start-text">
    <h5 className="line-1">My</h5>
    <h3 className="line-2">:)</h3>
    <h2 className="line-3">Website</h2>
    <h1 className="line-4">To begin, click a user name</h1>
</div>


    </>

    );
}





export default Start;
import './Start-background.css';                                                                        // makes the component available to other files // name of component exported