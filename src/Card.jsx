// Card function for start menu
import React from "react";
import profilePic from '/src/assets/wild_robot.jpg'
import './card.css'

function Card(){
    return (
    <div className="Card">
        <img src={profilePic} alt="fox profile picture"></img> 
    
    <div className="card-name">
        <h2>Josh</h2>
    </div>   
        
    </div>
    );
}

//i could have it instead of entering a password you put in your name!
// which is used to thank them for donwloading cv, loading webpage etc

export default Card