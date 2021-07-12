import axios from 'axios';
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from "react-router-dom"


import Header from './Header'
import Sidebar from './Sidebar'


const notify = (message) => toast(message);


function generateTracking(len) {
    return new Array(len).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toLowerCase"](); });
}

const ClearForm = () => {
    document.getElementById('shipmentform').reset()
}

function CreateShipment() {

    const [senderName, setSendername] = useState()
    const [senderPhone, setSenderphone] = useState()
    const [senderEmail, setSenderemail] = useState()
    const [senderCity, setSenderCity] = useState()
    const [receiverName, setReceivername] = useState()
    const [receiverPhone, setReceiverphone] = useState()
    const [receiverEmail, setReceiveremail] = useState()
    const [receiverCity, setReceivercity] = useState()
    const [tracking, setTracking] = useState()
    const [deliveryType, setDeliverytype] = useState()
    const [weight, setWeight] = useState()
    const [deliveryDate, setDeliverydate] = useState()
    const [qty, setQty] = useState()
    const [bookingDate, setBookingdate] = useState()
    const [paymentStatus, setPaymentstatus] = useState()
    const [status, setStatus] = useState()
    const [description, setDescription] = useState()
    const [comment, setComment] = useState()

    useEffect(() => {
        setTracking(`shiplive-${generateTracking(10)}`)
    }, [])

    const handleSubmit = e => {

        e.preventDefault()
        const formdata = new FormData();

        formdata.append('createshipment', 'createshipment')
        formdata.append('senderName', senderName)
        formdata.append('senderPhone', senderPhone)
        formdata.append('senderEmail', senderEmail)
        formdata.append('senderCity', senderCity)
        formdata.append('receivername', receiverName)
        formdata.append('receiverPhone', receiverPhone)
        formdata.append('receiverEmail', receiverEmail)
        formdata.append('receiverCity', receiverCity)
        formdata.append('tracking', tracking)
        formdata.append('deliveryType', deliveryType)
        formdata.append('weight', weight)
        formdata.append('deliveryDate', deliveryDate)
        formdata.append('qty', qty)
        formdata.append('bookingDate', bookingDate)
        formdata.append('paymentStatus', paymentStatus)
        formdata.append('status', status)
        formdata.append('description', description)
        formdata.append('comment', comment)

        axios({
            method: "post",
            url: 'http://shiplive.clonehackers.com/controller/createShipment.php',
            data: formdata
        }).then(res => {
            if (res.data.status === "success") {
                notify(res.data.data.message)
                ClearForm()
                e.target.reset()
            } else {
                notify(res.data.message)
            }
            console.log(res);
        })
            .catch(error => {
                console.error(error);
            })

    }

    const location = useLocation()

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-2 sidebarmaincontainer">
                    <Sidebar />
                </div>
                <div className="col-md-10 largecontainer container">
                    <h6 className="mt-4 mb-5 ml-4 "><i className="fa fa-compass fa-2x pr-2 text-info"></i>Location: <span className="text-info">{location.pathname}</span></h6>
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
                    <form action="" id="shipmentform" className="form-group mt-3" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="bg-light p-2 mb-4"><center>Sender Details</center></div>
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="pr-1">
                                                <label>Sender Name</label>
                                                <input type="text" className="form-control" value={senderName} onChange={event => setSendername(event.target.value)} required></input>
                                            </div>
                                            <div className="">
                                                <label>Sender Phone</label>
                                                <input type="number" className="form-control" value={senderPhone} onChange={event => setSenderphone(event.target.value)} required></input>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="">
                                                <label>Sender E-mail</label>
                                                <input type="text" className="form-control" value={senderEmail} onChange={event => setSenderemail(event.target.value)} required></input>
                                            </div>
                                            <div className="pl-1">
                                                <label>From City</label>
                                                <input type="text" className="form-control" value={senderCity} onChange={event => setSenderCity(event.target.value)} required></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="bg-light p-2 mb-4"><center>receiver Details</center></div>
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="pr-1">
                                                <label>Receiver Name</label>
                                                <input type="text" className="form-control" value={receiverName} onChange={event => setReceivername(event.target.value)} required></input>
                                            </div>
                                            <div className="">
                                                <label>Receiver Phone</label>
                                                <input type="number" className="form-control" value={receiverPhone} onChange={event => setReceiverphone(event.target.value)} required></input>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="">
                                                <label>Receiver E-mail</label>
                                                <input type="text" className="form-control" value={receiverEmail} onChange={event => setReceiveremail(event.target.value)} required></input>
                                            </div>
                                            <div className="pl-1">
                                                <label>to City</label>
                                                <input type="text" className="form-control" value={receiverCity} onChange={event => setReceivercity(event.target.value)} required></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <div className="card">
                                    <div className="bg-light p-2 mb-4"><center>Shipment Details</center></div>
                                    <div className="card-body">

                                        <div className="form-inline">
                                            <div className="d-flex">
                                                <div className="">
                                                    <label>Tracking No</label>
                                                    <input type="text" className="form-control" value={tracking}></input>
                                                </div>
                                                <div className=" pl-4 pr-4">
                                                    <label>Type</label>
                                                    <select value={deliveryType} onChange={event => setDeliverytype(event.target.value)} required className="form-control">
                                                        <option value="" className="form-control">select delivery method</option>
                                                        <option value="parcel" className="form-control">Parcel</option>
                                                        <option value="fleat" className="form-control">Fleat</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className=" pr-4 pt-4">
                                                    <label>weight</label>
                                                    <input type="number" className="form-control" placeholder="product weight" value={weight} onChange={event => setWeight(event.target.value)} required></input>
                                                </div>
                                                <div className="pt-4">
                                                    <label>Expected Delivey Date</label>
                                                    <input type="date" className="form-control" value={deliveryDate} onChange={event => setDeliverydate(event.target.value)} required></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-inline mt-2">
                                            <div className="d-flex">
                                                <div className="m-4">
                                                    <label>Qty</label>
                                                    <input type="number" className="form-control" placeholder="quantity" value={qty} onChange={event => setQty(event.target.value)} required></input>
                                                </div>

                                                <div className="m-4">
                                                    <label>Booking Date</label>
                                                    <input type="date" className="form-control" value={bookingDate} onChange={event => setBookingdate(event.target.value)} required></input>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="m-4">
                                                    <label>Payment Status</label>
                                                    <select value={paymentStatus} onChange={event => setPaymentstatus(event.target.value)} required className="form-control">
                                                        <option value="" className="form-control">payment status</option>
                                                        <option value="paid" className="form-control">Paid</option>
                                                        <option value="payondelivery" className="form-control">Pay On Delivery</option>
                                                    </select>
                                                </div>
                                                <div className="mt-4 ml-4 mb-4">
                                                    <label>Status</label>
                                                    <select value={status} onChange={event => setStatus(event.target.value)} required className="form-control">
                                                        <option value="" className="form-control"> package status</option>
                                                        <option value="onhold" className="form-control">On Hold</option>
                                                        <option value="canceled" className="form-control">Canceled</option>
                                                        <option value="Intransit" className="form-control">In Transit</option>
                                                        <option value="delivered" className="form-control">Delivered</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="mt-4 mr-4">
                                                <label>Description</label>
                                                <textarea className="form-control" value={description} onChange={event => setDescription(event.target.value)} required></textarea>
                                            </div>
                                            <div className="mt-4 mr-4">
                                                <label>Comments</label>
                                                <input type="text" className="form-control" value={comment} onChange={event => setComment(event.target.value)} required></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-2 mt-2">
                            <button type="submit" style={{ float: "right" }} className="btn btn-sm btn-info"><i className="fa fa-ambulance mr-1"></i>Create Shipment</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateShipment
