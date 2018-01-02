import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

export default function NavHeader() {
    return (
        <div className="hero-container">
            <header className="navbar">
                <a className="logo">Start Bootstrap</a>
                <div className="hamburger-button">
                    <button>
                        MENU
                        <FontAwesomeIcon className="bars" icon={faBars} />
                    </button>
                </div>
            </header>
            <header className="navbar-large">
                <div className="logo">Start Bootstrap</div>
                <div className="menu-list">
                    <div className="menu-item">
                        <a>SERVICES</a>
                    </div>
                    <div className="menu-item">
                        <a>PORTFOLIO</a>
                    </div>
                    <div className="menu-item">
                        <a>ABOUT</a>
                    </div>
                    <div className="menu-item">
                        <a>TEAM</a>
                    </div>
                    <div className="menu-item">
                        <a>CONTACT</a>
                    </div>
                </div>
            </header>
            <div className="intro">
                <h2>Welcome To Our Studio!</h2>
                <h1>IT'S NICE TO MEET YOU</h1>
                <div className="hero-button">TELL ME MORE</div>
            </div>
        </div>
    );
}
