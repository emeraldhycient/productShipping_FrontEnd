import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, withRouter, useLocation } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';



function Parsemanagementlist(props) {

    const location = useLocation()


    const [allShipment, setAllShipment] = useState([])

    const notify = (message) => toast(message)

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
                setAllShipment(data)

            })
            .catch(err => console.error(err))

    }

    useEffect(() => {

        getData()

    }, [])

    const handleDelete = e => {

        const formdata = new FormData();

        formdata.append("shipmentid", e)


        axios({
            method: "post",
            url: 'http://shiplive.clonehackers.com/controller/delete.php',
            data: formdata
        })
            .then(res => {
                if (res.data.status === 'success') {
                    notify(res.data.message);

                    setTimeout(() => {
                        props.history.push("/dashboard/manageshipment/")
                    }, 1000);

                } else {
                    notify(res.data.message)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }


    return (
        <>
            <div className="table-responsive mt-5">
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
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Actions</td>
                            <td>Tracking No</td>
                            <td>Booking Date</td>
                            <td>Sender Details</td>
                            <td>Receiver Details</td>
                            <td>Qty</td>
                            <td>Location</td>
                            <td>Destination</td>
                            <td>Weight</td>
                            <td>Payment</td>
                            <td>Shipment Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allShipment.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        <div className="btn-group-sm d-flex">
                                            <div className="btn btn-info"><Link className="text-white" to={`${location.pathname}/${item.tracking}`}><i className="fa fa-edit mr-1"></i>Edit</Link></div>
                                            <div className="btn btn-danger"
                                                onClick={() => {
                                                    handleDelete(item.id)
                                                }}
                                            ><i className="fa fa-trash pr-1"></i>Delete</div>
                                        </div>
                                    </td>
                                    <td>{item.tracking}</td>
                                    <td>{item.bookingdate}</td>
                                    <td>
                                        name: {item.sendername}<br />
                                        phone : {item.senderphone}<br />
                                        email : {item.senderemail}
                                    </td>
                                    <td>
                                        name: {item.receivername}<br />
                                        phone : {item.receiverphone}<br />
                                        email : {item.receiveremail}
                                    </td>
                                    <td>{item.qty}</td>
                                    <td>{item.senderaddress}</td>
                                    <td>{item.receiveraddress}</td>
                                    <td>{item.weigth}</td>
                                    <td>{item.payment}</td>
                                    <td>{item.status}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default withRouter(Parsemanagementlist)
