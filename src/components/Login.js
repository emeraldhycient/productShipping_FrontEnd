import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"


import Footer from './Footer'
import Header from './Header'
import SecondSubHeader from './SecondSubHeader'
import { verifyLogin, setToken } from "../authHandler/auth"

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [isloggedin, setIsloggedin] = useState();

    const [username, setusername] = useState()


    useEffect(() => {
        setIsloggedin(verifyLogin())
    }, [isloggedin])

    const notify = (message) => toast(message);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (checklen(password)) {
            const formdata = new FormData()
            formdata.append("login", "login")
            formdata.append("email", email)
            formdata.append("password", password)

            axios({
                method: "post",
                url: 'http://localhost/rald/producttrackerapi/api_v1/controller/access.php',
                data: formdata
            })
                .then(res => {
                    if (res.data.status === 'success') {
                        console.log(res.data)

                        notify(res.data.message)

                        setToken(res.data.token);

                        setIsloggedin(true)

                        setusername(res.data.username)

                    }
                    notify(res.data.message)
                })
                .catch(err => console.error(err))

        }
    }

    const checklen = (pass) => {
        if (pass.length < 8) {

            notify("password length is too small")
            return false
        }

        return true

    }

    if (!isloggedin) {


        return (
            <>
                <Header />
                <SecondSubHeader title="Login" />
                <div className="container mb-5" style={{ marginTop: "-12%" }}>
                    <div className="row">
                        <div className="col-md-6 m-auto pt-5">
                            <div className="card p-2 mt-5 bg-light">
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
                                <form className="form-group" onSubmit={handleSubmit}>
                                    <h6 className="mb-2">Email</h6>
                                    <input type="email" id="email" className="form-control mb-2" value={email} onChange={event => setEmail(event.target.value)} required />
                                    <h6 className="mb-2">password</h6>
                                    <input type="password" id="password" className="form-control mb-2" value={password} onChange={event => setPassword(event.target.value)} required />
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
    } else {
        return < Redirect to={{
            pathname: "/dashboard",
            search: `?username=${username}`
        }
        } />
    }


}
