import React from 'react'

function Testimonies() {
    return (
        <div style={{ marginTop: "10%" }} className="bg-light">
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
                <div className="testimony">
                    <div className="container">
                        <div className="col-md-7 m-auto">
                            <div className="card mb-3 pl-3 pt-3 pb-2 pr-2 mt-5" style={{ borderRadius: "8px" }}>
                                <h6 style={{ fontWeight: "bolder", fontSize: "bolder" }}><b>Christian Emily</b></h6>
                                <span><i className="fa  fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i></span>
                                <h6 className="pt-2 pl-3 pr-4 ">Excellent delivery service and perfect fit very pleased with the overall package</h6>
                                <h6 className="offset-10 pb-2 pt-2"><small>Recent Review</small></h6>
                            </div>
                            <div className="card mb-3 pl-3 pt-3 pb-2 pr-2" style={{ borderRadius: "8px" }}>
                                <h6 style={{ fontWeight: "bolder", fontSize: "bolder" }}><b>Isaac  Dan</b></h6>
                                <span><i className="fa  fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i></span>
                                <h6 className="pt-2 pl-3 pr-4 ">5/5 really good products environmentally friendly. purchased easily. Arrived promptly. Web.</h6>
                                <h6 className="offset-10 pb-2 pt-2"><small>Recent Review</small></h6>
                            </div>
                            <div className="card mb-3 pl-3 pt-3 pb-2 pr-2" style={{ borderRadius: "8px" }}>
                                <h6 style={{ fontWeight: "bolder", fontSize: "bolder" }}><b>Prince Rustov</b></h6><span><i className="fa  fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i></span>
                                <h6 className="pt-2 pl-3 pr-4 ">I was a bit reluctant to require your service but everything went perfect!</h6>
                                <h6 className="offset-10 pb-2 pt-2"><small>Recent Review</small></h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Testimonies
