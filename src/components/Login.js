import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import SecondSubHeader from './SecondSubHeader'

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <>
            <Header />
            <SecondSubHeader title="Login" />
            <div className="container mb-5" style={{ marginTop: "-12%" }}>
                <div className="row">
                    <div className="col-md-6 m-auto pt-5">
                        <div className="card p-2 mt-5 bg-light">
                            <form className="form-group">
                                <h6 className="mb-2">Email</h6>
                                <input type="email" id="email" className="form-control mb-2" value={email} onChange={event => setEmail(event.target.vale)} required />
                                <h6 className="mb-2">password</h6>
                                <input type="password" id="password" className="form-control mb-2" value={password} onChange={event => setPassword(event.target.vale)} required />
                                <div className="">
                                    <span>Don't have an account  <Link to="/register">Create Account</Link></span>
                                    <button className="btn btn-info" style={{ float: "right" }}>Login</button>
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
