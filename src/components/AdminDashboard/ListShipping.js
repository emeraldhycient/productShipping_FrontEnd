import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation, Link } from "react-router-dom"


import Header from './Header'
import Sidebar from './Sidebar'
import Parselisting from "./Parselisting"

function ListShipping() {

    const [allShipment, setAllShipment] = useState([])

    const getData = () => {

        const formdata = new FormData();

        formdata.append("listshipping", "listshipping")


        axios({
            method: "post",
            url: 'http://localhost/rald/producttrackerapi/api_v1/controller/controller.php',
            data: formdata
        })
            .then(res => {

                const data = Object.values(res.data.data)
                setAllShipment(data)

            })
            .catch(err => console.error(err))

    }

    useEffect(() => {

        getData()

    }, [])

    const location = useLocation()

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-3 sidebarmaincontainer">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="container">
                        <h6 className="mt-4 mb-2 ml-4 ">Location: <span className="text-info">{location.pathname}</span></h6>
                        <button className="btn btn-sm btn-dark text-white mr-2 mb-2" style={{ float: 'right' }}><Link to="/dashboard/manage">Manage</Link></button>
                        <Parselisting allShipment={allShipment} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListShipping
