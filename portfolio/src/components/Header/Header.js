import React from "react";
import "./Header.css";

function Header() {
    return (
        <div id="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <img id="logo" src="images/ab-color.png" alt="logo" />

                            <h1>ANDY BICKFORD</h1>

                            <h2>WEB DEVELOPMENT & DESIGN</h2>

                            <a data-toggle="tooltip" data-placement="top" title="atb5498@gmail.com"><i
                                className="fas fa-envelope fa-2x"></i>
                            </a>

                            <a href="https://github.com/atb5498" target="_blank" data-toggle="tooltip" data-placement="top"
                                title="atb5498"><i className="fab fa-github fa-2x" role="button"></i>
                            </a>

                            <a href="https://abcreative.design" target="_blank" data-toggle="tooltip" data-placement="top"
                                title="abcreative.design"><i className="fas fa-pencil-alt fa-2x" role="button" data-toggle="tooltip"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
