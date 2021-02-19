import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import EditShipping from './EditShipping'
import Header from './Header'
import Parsemanagementlist from './Parsemanagementlist'
import Sidebar from "./Sidebar"

function Manageshipment() {

    const { tracking } = useParams()
    const location = useLocation()


    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-2 sidebarmaincontainer">
                    <Sidebar />
                </div>
                <div className="col-md-">
                    <div className="container">
                        <h6 className="mt-4 mb-2 ml-4 "><i className="fa fa-compass fa-2x pr-2 text-info"></i>Location: <span className="text-info">{location.pathname}</span></h6>
                        {
                            tracking ? <EditShipping /> : <Parsemanagementlist />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manageshipment
