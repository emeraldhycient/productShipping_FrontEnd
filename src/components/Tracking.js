import React, { useState } from 'react'
import axios from "axios"


import Footer from './Footer'
import Header from './Header'
import SecondSubHeader from './SecondSubHeader'

export default function Tracking() {

    const [tracking, setTracking] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("tracking", tracking)

        axios({
            method: "post",
            url: 'http://localhost/rald/producttrackerapi/api_v1/controller/controller.php',
            data: formdata
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.error(err))

    }

    return (
        <>
            <Header />
            <SecondSubHeader title="Tracking" />
            <div className="container mb-5" style={{ marginTop: "-12%" }}>
                <div className="row">
                    <div className="col-md-6 m-auto pt-5">
                        <div className="card p-2 mt-5 bg-light">
                            <form className="form-group" onSubmit={handleSubmit}>
                                <h6 className="mb-2">Enter Product Tracking</h6>
                                <input type="email" id="email" className="form-control mb-2" value={tracking} onChange={event => setTracking(event.target.value)} required />
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
