import React from 'react'


export default function Subheader() {
    return (
        <div>
            <div id="subheader">
                <div id="blur">
                    <div id="brander" className="container">
                        <center>
                            <h2 className="text-white"><span id="subheadertitle">WorldWide Freight Services</span></h2>
                            <button className="btn btn-info pl-5 pr-5 pt-2 pb-2 mt-2"><b>GET STARTED !</b></button>
                        </center>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "-5%" }}>
                <div className="row text-white">
                    <div className="col-md-4 box bg-info m-auto pt-5">
                        <center>
                            <i className="fa fa-tags fa-3x mb-4 pl-3 pr-3"></i>
                            <h5 id="tag" className="mb-4">Best Prices</h5>
                            <p className="text-white">We offer one of the best international shipment rate with a $200 discount on your first shipment.</p>
                        </center>
                    </div>
                    <div className="col-md-4 box bg-dark m-auto  pt-5 pl-3 pr-3">
                        <center>
                            <i className="fa fa-truck fa-3x mb-4"></i>
                            <h5 id="tag" className="mb-4">Prompt Delivery</h5>
                            <p className="text-white">Your packages will be delivered in 3 to 5 business days.</p>
                        </center>
                    </div>
                    <div className="col-md-4 box bg-info m-auto pt-5 pl-3 pr-3">
                        <center>
                            <i className="fa fa-phone-square fa-3x mb-4"></i>
                            <h5 id="tag" className="mb-4">24/7 Support</h5>
                            <p className="text-white">Feel free to call us anytime,we are always availabe to assist you(Business days only)</p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}
