import React from 'react'

import christian from "../images/kinsey-cB8YiJt_0Y0-unsplash.jpg"

function Testimonies() {
    return (
        <div style={{ marginTop: "10%" }}>
            <div className="bg-secondary pt-5">
                <center>
                    <h1 id="whychooseustitle" className="text-info">Recommended Stores</h1>
                    <p className="text-white">Shop quality goods and let us ship it</p>
                </center>
                <div className="container">
                    <div className="row pb-5 mt-5">
                        <div className="col-md-3">
                            <center>
                                <img src="https://1000logos.net/wp-content/uploads/2020/06/AliExpress-Logo.png" alt="" style={{ width: "120px", height: "100px" }} />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center>
                                <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" style={{ width: "120px", height: "100px" }} />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center>
                                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51d.png" alt="" style={{ width: "120px", height: "100px" }} />
                            </center>
                        </div>
                        <div className="col-md-3">
                            <center>
                                <img src="https://i.pinimg.com/originals/c2/da/ae/c2daaeea21490d8b3ad7744a3170d3ca.png" alt="" style={{ width: "120px", height: "100px" }} />
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "6%" }}>
                <center>
                    <h1 id="whychooseustitle" className="text-info">What Our Customers Say</h1>
                    <hr></hr>
                </center>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="..." alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={christian} style={{ width: "100px", height: "200px", borderRadius: "15px" }} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Christian Luke</h5>
                                <p>This is the best delivery  service i have used so far</p>
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

        </div>
    )
}

export default Testimonies
