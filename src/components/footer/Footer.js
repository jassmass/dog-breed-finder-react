import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
            <div className="footer-left">
                <a href="/" className="logo">Dog BF</a>
                <a href="/">Home</a>
                <a href="breed-finder.html">Finder</a>
            </div>
           
            <a href="https://www.jasminkamasal.com/" target="_blank" className="footer-right">© 2021 Created by Jasminka Masal</a>
        </div>
        )
    }
}

export default Footer;