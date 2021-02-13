import React from 'react'

import { Link } from "react-router-dom";

import './main.css';

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderBottom: '1px solid #5bc0de' }}>
                    <span className="navbar-brand text-info offset-md-1 offset-1">
                        <b>Shiplive</b>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse offset-md-7" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" id="navbarthing">
                            <li className="nav-item active mr-2">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/Contact_us">Contact-Us</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/tracking">Tracking </Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
