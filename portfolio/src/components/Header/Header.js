import React from "react";
import "./Header.css";

function Header() {
    return (
        <div id="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <img id="logo" src="ab-color.png" alt="logo" />

                            <h1>ANDY BICKFORD</h1>

                            <h2>WEB DEVELOPMENT & DESIGN</h2>

                            <a data-toggle="tooltip" data-placement="top" title="atb5498@gmail.com"><i
                                className="fas fa-envelope fa-2x"></i>
                            </a>

                            <a data-toggle="tooltip" data-placement="top"
                                title="215-206-6819"><i className="fas fa-phone fa-2x" data-toggle="tooltip"></i>
                            </a>

                            <a href="https://github.com/atb5498" target="_blank" data-toggle="tooltip" data-placement="top"
                                title="atb5498"><i className="fab fa-github fa-2x" role="button"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
