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
                                <Link to="/dashboard" className="text-muted">
                                    <i className="fa fa-user text-muted pr-1"></i>IGWEZE HYCIENT
                                </Link>                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/dashboard" className="text-muted">
                                    <i className="fa fa-dashboard text-muted pr-2"></i>Dashboard
                                </Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/dashboard/createshipment" className="text-muted">
                                    <i className="fa fa-clipboard text-muted pr-2"></i>Create Shipment
                                </Link>                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/dashboard/allshipments" className="text-muted"><i className="fa fa-truck text-muted pr-2"></i>All Shipment</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/dashboard/manageshipment" className="text-muted">
                                    <i className="fa fa-tasks text-muted pr-1"></i>Manage Shipment
                                </Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="" className="text-muted"><i className="fa fa-download text-muted pr-2"></i>Export Pdf</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <i className="fa fa-unlink pr-2 text-muted"></i><b>Logout</b>
                            </li>
                        </ul>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
