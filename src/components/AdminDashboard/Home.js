import React, { useState, useEffect } from 'react'
import axios from "axios"

import Sidebar from './Sidebar';
import Header from './Header';

export default function Home() {

    const [recent, setrecent] = useState([])
    const [onhold, setonhold] = useState([])
    const [delivered, setdelivered] = useState([])
    const [totalshipment, settotalshipment] = useState([])


    const getData = () => {

        const formdata = new FormData();
        formdata.append("listshipping", "listshipping")

        axios({
            method: "post",
            url: 'http://shiplive.clonehackers.com/controller/listshipping.php',
            data: formdata
        })
            .then(res => {
                const data = Object.values(res.data.data)
                setrecent(data.splice(-2))
            })
            .catch(err => console.error(err))
    }

    const getTotalshipment = () => {

        const formdata = new FormData();
        formdata.append("totalshipment", "totalshipment")

        axios({
            method: "post",
            url: 'http://shiplive.clonehackers.com/controller/totals.php',
            data: formdata
        })
            .then(res => {
                if (res.data.status === "success") {
                    settotalshipment(res.data.totalshipment)
                }
            })
            .catch(err => console.error(err))
    }

    const getTotaldelivered = () => {

        const formdata = new FormData();
        formdata.append("totalDelivered", "totalDelivered")

        axios({
            method: "post",
            url: 'http://shiplive.clonehackers.com/controller/totals.php',
            data: formdata
        })
            .then(res => {
                if (res.data.status === "success") {
                    setdelivered(res.data.totalDelivered)
                }
            })
            .catch(err => console.error(err))
    }

    const getTotalonhold = () => {

        const formdata = new FormData();
        formdata.append("totalonhold", "totalonhold")

        axios({
            method: "post",
            url: 'http://shiplive.clonehackers.com/controller/totals.php',
            data: formdata
        })
            .then(res => {
                if (res.data.status === "success") {
                    setonhold(res.data.totalOnHold)
                }
            })
            .catch(err => console.error(err))
    }


    useEffect(() => {

        getData()
        getTotaldelivered()
        getTotalonhold()
        getTotalshipment()

    }, [])

    const Recentupdate = () => {
        return (
            recent.map(item => (
                <div className="card mb-2 bg-light" key={item.id}>
                    <div className="ml-3 mt-1 mb-1">
                        <b>Parcel to {item.receivername} : {item.comment} </b><br></br>
                        <small><span>Tracking-ID: <b>{item.tracking}</b></span></small>
                    </div>
                    <div className="d-flex offset-md-8 mb-2 status">
                        <div className="card p-1"><small><span className="text-muted">status:</span><b>{item.status}</b></small></div>
                        <div className="card p-1 ml-4"><small><span className="text-muted">Delivery Date:</span><b>{item.deliverydate}</b> </small></div>
                    </div>
                </div>
            ))
        )
    }

    const Hold = () => {
        return (
            <>
                <div className="col-md-4 mb-2">
                    <div className="card-info bg-light">
                        <div className="round bg-warning">
                            <i className="fa fa-bandcamp text-white fa-2x"></i>
                        </div>
                        <div className="mt-3">
                            <h6 style={{ fontWeight: "5em", fontSize: "1.4em" }}>Total On Hold</h6>
                            <span style={{ fontWeight: "1.4em", fontSize: "1.4em", borderRadius: "10px", float: 'center' }} className="text-white p-2 bg-warning" > {onhold}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const Delivered = () => {
        return (
            <>

                <div className="col-md-4 mb-2">
                    <div className="card-info bg-light">
                        <div className="round bg-success">
                            <i className="fa fa-truck text-white fa-2x"></i>
                        </div>
                        <div className="mt-3">
                            <h6 style={{ fontWeight: "5em", fontSize: "1.4em" }}>Total Delivered</h6>
                            <span style={{ fontWeight: "1.4em", fontSize: "1.4em", borderRadius: "10px", float: 'center' }} className="text-white p-2 bg-success" > {delivered}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const Allshipment = () => {
        return (
            <>
                <div className="col-md-4 mb-2">
                    <div className="card-info bg-light">
                        <div className="round bg-info">
                            <i className="fa fa-anchor text-white fa-2x"></i>
                        </div>
                        <div className="mt-3">
                            <h6 style={{ fontWeight: "5em", fontSize: "1.4em" }}>Total Shipped</h6>
                            <span style={{ fontWeight: "1.4em", fontSize: "1.4em", borderRadius: "10px", float: 'center' }} className="text-white p-2 bg-info" > {totalshipment}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-2 sidebarmaincontainer">
                    <Sidebar />
                </div>
                <div className="col-md-10 largecontainer">
                    <h6 className="mt-4 ml-2 mb-4 text-info"><b style={{ fontSize: "larger", fontWeight: "bolder" }}>Hello,Welcome</b></h6>
                    <h6 className="mt-3 ml-2 mb-2"><b>Recent Updates</b></h6>
                    <div className="container mb-5">
                        {

                            recent ?
                                <Recentupdate />
                                :
                                <div className="card mb-2">
                                    <div className="ml-3 mt-1 mb-1">
                                        <b>No updates yet </b><br></br>
                                        <small><span>Tracking-ID: <b></b></span></small>
                                    </div>
                                    <div className="d-flex offset-md-8 mb-2 status">
                                        <div className="card p-1"><small><span className="text-muted">status:</span><b></b></small></div>
                                        <div className="card p-1 ml-4"><small><span className="text-muted">Delivery Date:</span><b></b> </small></div>
                                    </div>
                                </div>
                        }
                    </div>

                    <div className="container" style={{ marginTop: "10%" }}>
                        <div className="row">
                            <Allshipment />
                            <Hold />
                            <Delivered />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
