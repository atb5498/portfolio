import React from "react";
import "./WebDev.css";

function WebDev() {
    return (
        <div id="web-dev">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>LATEST PROJECTS</h1>
                        <div className="divider mx-auto"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="projects">
                    <div className="row justify-content-center text-center">
                        <div id="project-1" className="col-7 col-sm-6 col-md-4">
                            <p>Find a brewery.</p>

                            <a href="https://atb5498.github.io/brew-near-you/" target="_blank">
                                <img src="images/brew-near-you.png" className="project img-fluid" alt="Responsive image" />
                            </a>
                        </div>

                        <div id="project-2" className="col-7 col-sm-6 col-md-4">
                            <p>Generate a profile.</p>

                            <a href="https://atb5498.github.io/elevate/" target="_blank">
                                <img src="images/elevate.png" className="project img-fluid" alt="Responsive image" />
                            </a>
                        </div>

                        <div id="project-3" className="col-7 col-sm-6 col-md-4">
                            <p>Plan your day.</p>

                            <a href="https://atb5498.github.io/work-day-planner/" target="_blank">
                                <img id="project3" src="images/work-day-planner.png" className="project img-fluid" alt="Responsive image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebDev;
