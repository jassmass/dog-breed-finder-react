import React from "react";
import './NavigationBar.css';

class NavigationBar extends React.Component {
    render() {
        return(
            <div className="navigation-bar">
            <a href="/" className="logo">Dog BF</a>
            <div className="navigation-items">
                <ul className="navigation-bar-list">
                    <li className="navigation-bar-list-item">
                        <a href="/">Home</a>
                    </li>
    
                    <li className="navigation-bar-list-item"> 
                        <a href="breed-finder.html">Finder</a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default NavigationBar;