import React from "react";
import './Hero.css';

class Hero extends React.Component {
    render() {
        return(
            <div className="hero">
                <div className="hero-info-container">
                    <h1 className="hero-title">Dog Breed Finder</h1>  
                    <p className="hero-description">Identify a dog's breed, learn about its temperament, find similar dogs, and more.</p>
                    <button className="hero-button" id="find-breed-button">Find the breed</button>
                </div>
                <div className="hero-image-container">
                    <img src="home-image.png" alt="brown-dog" />
                 </div>
            </div>
        )
    }
}

export default Hero;