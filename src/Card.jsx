// Card function for start menu
import React from "react";
import profilePic from '/src/assets/wild_robot.jpg'
import './card.css'
import cv from '/src/assets/cv.png'

// card components with pictures and names
function Card() {
    return (
        <div className="card-container">
            <div className="Card">
                <img src={profilePic} alt="Wild Robot Movie Image" />
                <div className="card-name">
                    <h2>Josh</h2>
                </div>
            </div>

            <div className="Card">
                <img src={cv} alt="CV" />
                <div className="card-name">
                    <h2>CV</h2>
                </div>
            </div>
        </div>
    );
}


//i could have it instead of entering a password you put in your name!
// which is used to thank them for donwloading cv, loading webpage etc

export default Card