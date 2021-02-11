import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="sidebarcontainer">
            <div className="blur">
                <ul className="sidebar">
                    <li>
                        <Link to="/dashboard">
                            <i className="fa fa-user pr-1"></i>IGWEZE HYCIENT
                        </Link>
                    </li>
                    <li> <Link to="">
                        <i className="fa fa-dashboard text-white pr-2"></i>Dashboard
                </Link>
                    </li>
                    <li><Link to="/dashboard/createshipment">
                        <i className="fa fa-clipboard pr-2"></i>Create Shipment
                </Link>
                    </li>
                    <li><Link to="">
                        <i className="fa fa-tasks pr-1"></i>Manage Shipment
                    </Link></li>
                    <li>
                        <Link to="/dashboard/allshipments"><i className="fa fa-truck pr-2"></i>All Shipment</Link>
                    </li>
                    <li>
                        <Link to=""><i className="fa fa-download pr-2"></i>Export Pdf</Link>
                    </li>
                    <li className="text-danger"><i className="fa fa-unlink pr-2 text-white"></i><b>Logout</b></li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
