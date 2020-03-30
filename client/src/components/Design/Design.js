import React from "react";
import "./Design.css";

function Design() {
    return (
        <div id="design">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>DESIGN</h1>
                        <div className="divider mx-auto"></div>
                    </div>
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img src="images/1.jpg" className="w-100" alt="1" />
                                </div>

                                <div className="col">
                                    <img src="images/2.jpg" className="w-100" alt="2" />
                                </div>

                                <div className="col">
                                    <img src="images/3.jpg" className="w-100" alt="3" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img src="images/4.jpg" className="w-100" alt="4" />
                                </div>

                                <div className="col">
                                    <img src="images/5.jpg" className="w-100" alt="5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Design;
