import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../../authHandler/auth'

function Sidebar(props) {
    return (
        <aside className="sidebarcontainer bg-light">
            <ul className="sidebar">
                <li>
                    <Link to="/dashboard" className="text-muted">
                        <i className="fa fa-user text-muted pr-1"></i>{localStorage.getItem('username')}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-muted">
                        <i className="fa fa-dashboard text-muted pr-2"></i>Dashboard
                </Link>
                </li>
                <li>
                    <Link to="/dashboard/createshipment" className="text-muted">
                        <i className="fa fa-clipboard text-muted pr-2"></i>Create Shipment
                </Link>
                </li>
                <li>
                    <Link to="/dashboard/allshipments" className="text-muted"><i className="fa fa-truck text-muted pr-2"></i>All Shipment</Link>
                </li>
                <li>
                    <Link to="/dashboard/manageshipment" className="text-muted">
                        <i className="fa fa-tasks text-muted pr-1"></i>Manage Shipment
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-muted"><i className="fa fa-download text-muted pr-2"></i>Export Pdf</Link>
                </li>
                <li className="text-danger"
                    onClick={() => {
                        logout(() => {
                            props.history.push("/dashboard")
                        })
                    }}
                ><i className="fa fa-unlink pr-2 text-muted"></i><b>Logout</b></li>
            </ul>
        </aside>
    )
}

export default withRouter(Sidebar)
