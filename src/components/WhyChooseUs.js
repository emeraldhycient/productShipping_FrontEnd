import React from 'react'


function WhyChooseUs() {
    return (
        <div className="container" style={{ marginTop: "10%" }}>
            <div>
                <center>
                    <h1 id="whychooseustitle" className="text-info">Why Choose Us</h1>
                    <span>Our excellent services</span>
                    <hr></hr>
                </center>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 d-flex mb-4">
                    <div><i className="fa fa-anchor fa-3x p-3 text-info"></i></div>
                    <div>
                        <h5>Reputation</h5>
                        <p>We only ship with world renowned companies like DHL, FEDEX, UPS, so that your packages will be delivered in a timely manner.</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div><i className="fa fa-desktop fa-3x p-3 text-info"></i></div>
                    <div>
                        <h5>Easy tracking and monitoring</h5>
                        <p>True online tracking, all the way to the final destination.Easy online shipping. Pay online Print shipping labels online, Schedule Courier Pickup online</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex mb-4">
                    <div><i className="fa fa-ship fa-3x p-3 text-info"></i></div>
                    <div>
                        <h5>Prompt Delivery</h5>
                        <p>Your packages will be delivered in 3 to 5 business days.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
