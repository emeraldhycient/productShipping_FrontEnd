import React, { useState } from 'react'

import Footer from './Footer'
import Header from './Header'
import SecondSubHeader from './SecondSubHeader'

export default function Contact() {

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    return (
        <>
            <Header />
            <SecondSubHeader title="Contact Us" />
            <div className="container mb-5" style={{ marginTop: "-12%" }}>
                <div className="row">
                    <div className="col-md-7 m-auto pt-5">
                        <div className="card p-2 mt-5 bg-light">
                            <form className="form-group">
                                <div className="form-inline">
                                    <h6 className="mb-2 mr-1">FirstName</h6>
                                    <input type="text" className="form-control col mb-2 mr-1" value={fname} onChange={event => setFname(event.target.vale)} required />
                                    <h6 className="mb-2 mr-1">LastName</h6>
                                    <input type="text" className="form-control col mb-2" value={lname} onChange={event => setLname(event.target.vale)} required />
                                </div>
                                <h6 className="mb-2">Email</h6>
                                <input type="email" className="form-control mb-2" value={email} onChange={event => setEmail(event.target.vale)} required />
                                <h6 className="mb-2">subject</h6>
                                <input type="text" className="form-control mb-2" value={subject} onChange={event => setSubject(event.target.vale)} required />
                                <h6 className="mb-2">Message</h6>
                                <textarea value={message} onChange={setMessage} cols="30" rows="10" className="form-control">
                                </textarea>
                                <button type="submit" className="btn btn-info mt-2" style={{ float: "right" }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 m-auto pt-5">
                        <div className="bg-light p-3">
                            <h4>Address</h4>
                            <h6>198 Fake St. Mountain View, San Francisco, California, USA</h6>
                            <div className="mt-4">
                                <h4>Email Address</h4>
                                <h6 className="text-info">Shiplive@gmail.com</h6>
                            </div>
                        </div>
                        <div className="bg-light mt-3"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
