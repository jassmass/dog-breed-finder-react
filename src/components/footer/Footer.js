import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
            <div className="footer-left">
                <a href="index.html" className="logo">Dog BF</a>
                <a href="index.html">Home</a>
                <a href="breed-finder.html">Finder</a>
            </div>
           
            <p className="footer-right">© 2021 Created by Jasminka Masal</p>
        </div>
        )
    }
}

export default Footer;