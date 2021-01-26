import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"

import Footer from './Footer'
import Header from './Header'
import SecondSubHeader from './SecondSubHeader'

export default function Register() {

    const [username, setUsername] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();

    const notify = (message) => toast(message);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (checklen(password, cpassword) && checkmatch(password, cpassword)) {
            const formdata = new FormData()
            formdata.append("username", username)
            formdata.append("email", email)
            formdata.append("phone", phone)
            formdata.append("password", password)

            axios({
                method: "post",
                url: 'http://localhost/rald/producttrackerapi/api_v1/controller/controller.php',
                data: formdata
            })
                .then(res => {
                    notify("account created successfully")
                    console.log(res);
                })
                .catch(err => console.error(err))

        }
    }

    const checklen = (pass, cpass) => {
        if (pass.length > 8 && cpass.length > 8) {
            return true
        } else {
            notify("password length is too small")
            return false
        }

    }

    const checkmatch = (pass, cpass) => {

        if (pass === cpass) {
            return true
        } else {
            notify("passwords doesn't match")
            return false
        }
    }

    return (
        <>
            <Header />
            <SecondSubHeader title="Create An Account" />
            <div className="container mb-5" style={{ marginTop: "-12%" }}>
                <div className="row">
                    <div className="col-md-6 m-auto pt-5">
                        <Toaster
                            toastOptions={{
                                // Define default options
                                style: {
                                    margin: '40px',
                                    background: 'rgb(58, 135, 170)',
                                    color: '#fff',
                                    zIndex: 1,
                                },
                                duration: 3000,
                                // Default options for specific types
                                success: {
                                    duration: 3000,
                                    theme: {
                                        primary: 'green',
                                        secondary: 'black',
                                    },
                                },
                            }}
                        />
                        <div className="card p-2 mt-5 bg-light">
                            <form className="form-group" onSubmit={handleSubmit}>
                                <h6 className="mb-2">UserName</h6>
                                <input type="text" className="form-control mb-2" value={username} onChange={event => setUsername(event.target.value)} required />
                                <h6 className="mb-2">Email</h6>
                                <input type="email" className="form-control mb-2" value={email} onChange={event => setEmail(event.target.value)} required />
                                <h6 className="mb-2">Phone</h6>
                                <input type="text" className="form-control mb-2" value={phone} onChange={event => setPhone(event.target.value)} required />
                                <h6 className="mb-2">Confirm password</h6>
                                <input type="password" className="form-control mb-2" value={cpassword} onChange={event => setCpassword(event.target.value)} required />
                                <h6 className="mb-2">password</h6>
                                <input type="password" className="form-control mb-2" value={password} onChange={event => setPassword(event.target.value)} required />
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
