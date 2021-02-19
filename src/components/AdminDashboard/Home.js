import React from 'react'

import Sidebar from './Sidebar';
import Header from './Header';

export default function Home() {

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-2 sidebarmaincontainer">
                    <Sidebar />
                </div>
                <div className="col-md-10 largecontainer">
                    <h6 className="mt-4 ml-2 mb-4 text-info"><b style={{ fontSize: "larger", fontWeight: "bolder" }}>Hello,Welcome</b></h6>
                    <h6 className="mt-3 ml-2 mb-2"><b>Recent Updates</b></h6>
                    <div className="container">
                        <div className="card mb-2">
                            <div className="ml-3 mt-1 mb-1">
                                <b>Parcel to Boston Walkie : Birthday Watch </b><br></br>
                                <small><span>Tracking-ID: <b>shiplive-hduddnjf</b></span></small>
                            </div>
                            <div className="d-flex offset-md-8 mb-2 status">
                                <div className="card p-1"><small><span className="text-muted">status:</span><b>pending</b></small></div>
                                <div className="card p-1 ml-4"><small><span className="text-muted">Delivery Date:</span><b>20/02/20</b> </small></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="ml-3 mt-1 mb-1">
                                <b>Parcel to Boston Walkie : Birthday Watch </b><br></br>
                                <small><span>Tracking-ID: <b>shiplive-hduddnjf</b></span></small>
                            </div>
                            <div className="d-flex offset-md-8 mb-2 status">
                                <div className="card p-1"><small><span className="text-muted">status:</span><b>pending</b></small></div>
                                <div className="card p-1 ml-4"><small><span className="text-muted">Delivery Date:</span><b>20/02/20</b> </small></div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
