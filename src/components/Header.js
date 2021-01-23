import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand text-info offset-md-1 offset-1">
                    <b>Shiplive</b>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse offset-md-7" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active mr-2">
                            <Link to="/"><h6>Home </h6></Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link to="/Contact_us"><h6>Contact-Us </h6></Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link to="/tracking"><h6>Tracking </h6></Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link to="/login"><h6>Login</h6></Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}
