import React from "react";
import "./LatestProjects.css";

function LatestProjects() {
    return (
        <div id="latest-projects">
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
                            <p>Plan your day.</p>

                            <a href="https://atb5498.github.io/work-day-planner/" target="_blank">
                                <img src="images/work-day-planner.png" className="project-img img-fluid" alt="Work Day Planner" />
                            </a>
                        </div>

                        <div id="project-2" className="col-7 col-sm-6 col-md-4">
                            <p>Find a brewery.</p>

                            <a href="https://atb5498.github.io/brew-near-you/" target="_blank">
                                <img src="images/brew-near-you.png" className="project-img img-fluid" alt="Brew Near You" />
                            </a>
                        </div>

                        <div id="project-3" className="col-7 col-sm-6 col-md-4">
                            <p>Sell your books.</p>

                            <a href="https://the-bookup-dev.herokuapp.com/" target="_blank">
                                <img src="images/the-bookup.png" className="project-img img-fluid" alt="The BookUp" />
                            </a>
                        </div>

                        <div id="project-4" className="col-7 col-sm-6 col-md-4">
                            <p>Generate a password.</p>

                            <a href="https://atb5498.github.io/password-generator" target="_blank">
                                <img src="images/password-generator.png" className="project-img img-fluid" alt="Password Generator" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestProjects;
