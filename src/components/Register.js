import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import SecondSubHeader from './SecondSubHeader'

export default function Register() {

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();
    const [address, setAddress] = useState();

    return (
        <>
            <Header />
            <SecondSubHeader title="Create An Account" />
            <div className="container mb-5" style={{ marginTop: "-12%" }}>
                <div className="row">
                    <div className="col-md-6 m-auto pt-5">
                        <div className="card p-2 mt-5 bg-light">
                            <form className="form-group">
                                <h6 className="mb-2">FirstName</h6>
                                <input type="text" className="form-control mb-2" value={fname} onChange={event => setFname(event.target.vale)} required />
                                <h6 className="mb-2">LastName</h6>
                                <input type="text" className="form-control mb-2" value={lname} onChange={event => setLname(event.target.vale)} required />
                                <h6 className="mb-2">Email</h6>
                                <input type="email" className="form-control mb-2" value={email} onChange={event => setEmail(event.target.vale)} required />
                                <h6 className="mb-2">Phone</h6>
                                <input type="text" className="form-control mb-2" value={phone} onChange={event => setPhone(event.target.vale)} required />
                                <h6 className="mb-2">Address</h6>
                                <input type="text" className="form-control mb-2" value={address} onChange={event => setAddress(event.target.vale)} required />
                                <h6 className="mb-2">Confirm password</h6>
                                <input type="password" className="form-control mb-2" value={cpassword} onChange={event => setCpassword(event.target.vale)} required />
                                <h6 className="mb-2">password</h6>
                                <input type="password" className="form-control mb-2" value={password} onChange={event => setPassword(event.target.vale)} required />
                                <div className="">
                                    <span>Already have account  <Link to="/login">Login</Link></span>
                                    <button className="btn btn-info" style={{ float: "right" }}>Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
