import React from "react";
import './Start-background.css';                                              // imports the react library // not need anymore (since update) but good habit

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
    <div className="s-footer"></div>
    <div className="s-flare"></div>
    <div className="s-white-line"></div>

// start text

    <div className="start-text">
    <h5 className="line-1">My</h5>
    <h3 className="line-2">:)</h3>
    <h2 className="line-3">Website</h2>
    <h1 className="line-4">To begin, click a user name</h1>
</div>

  <div className="s-footer-writing">
    <h5>Thanks for checking out my page!
      <br />
      I hope you like it!
    </h5>
  </div>

    <div className="s-footer-writing-2">
  <h5 className="icon-text">
    <img
      src="src/assets/turn-off-icon.png"
      alt="(windows-xp power button)"
      className="power-icon"
    />
    Check out my reference for this page!
  </h5>
</div>


    </>

    );
}





export default Start;
import './Start-background.css';                                                                        // makes the component available to other files // name of component exported