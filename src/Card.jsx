// Card function for start menu
import React from "react";
import profilePic from '/src/assets/wild_robot.jpg'
import './card.css'

function Card(){
    return (
    <div className="Card">
        <img src={profilePic} alt="fox profile picture"></img>
        <h2>Josh</h2>
        
    </div>
    );
}

export default Card