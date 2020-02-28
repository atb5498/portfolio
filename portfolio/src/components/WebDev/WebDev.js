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
                    <div className="row justify-content-center">
                        <div className="col-7 col-sm-6 col-md-4">
                            <a href="https://atb5498.github.io/brew-near-you/" target="_blank">
                                <img class="project" src="images/brew-near-you.png" className="img-fluid" alt="Responsive image" />
                            </a>
                        </div>

                        <div className="col-7 col-sm-6 col-md-4">
                            <a href="https://atb5498.github.io/elevate/" target="_blank">
                                <img class="project" src="images/elevate.png" className="img-fluid" alt="Responsive image" />
                            </a>
                        </div>

                        <div className="col-7 col-sm-6 col-md-4">
                            <a href="https://atb5498.github.io/work-day-planner/" target="_blank">
                                <img class="project" src="images/work-day-planner.png" className="img-fluid" alt="Responsive image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebDev;
