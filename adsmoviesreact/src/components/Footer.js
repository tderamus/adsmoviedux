import React from "react";
import '../styles.css';

export default function Footer(){

    // get current year for footer
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-text">
                &copy; {currentYear} Adsmoviedux, all rights reserved.
            </p>
        </footer>
    );
}