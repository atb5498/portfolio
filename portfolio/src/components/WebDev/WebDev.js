import React from "react";
import "./WebDev.css";

function WebDev() {
    return (
        <div id="web-dev">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>WEB DEVELOPMENT</h1>
                        <div className="divider mx-auto"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="https://atb5498.github.io/brew-near-you/" target="_blank">
                            <img src="images/brew-near-you.png" className="img-fluid" alt="Responsive image" />
                        </a>
                    </div>

                    <div className="col">
                        <a href="https://atb5498.github.io/brew-near-you/" target="_blank">
                            <img src="images/brew-near-you.png" className="img-fluid" alt="Responsive image" />
                        </a>
                    </div>

                    <div className="col">
                        <a href="https://atb5498.github.io/brew-near-you/" target="_blank">
                            <img src="images/brew-near-you.png" className="img-fluid" alt="Responsive image" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebDev;
