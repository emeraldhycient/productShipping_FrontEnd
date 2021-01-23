import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import SecondSubHeader from './SecondSubHeader'

export default function Tracking() {

    const [tracking, setTracking] = useState();

    return (
        <>
            <Header />
            <SecondSubHeader title="Tracking" />
            <div className="container mb-5" style={{ marginTop: "-12%" }}>
                <div className="row">
                    <div className="col-md-6 m-auto pt-5">
                        <div className="card p-2 mt-5 bg-light">
                            <form className="form-group">
                                <h6 className="mb-2">Enter Product Tracking</h6>
                                <input type="email" id="email" className="form-control mb-2" value={tracking} onChange={event => setTracking(event.target.vale)} required />
                                <button className="btn btn-info" style={{ float: "right" }}>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
