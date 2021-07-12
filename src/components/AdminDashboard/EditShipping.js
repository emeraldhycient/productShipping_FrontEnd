import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, withRouter } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const notify = (message) => toast(message);


function EditShipping(props) {

    const { tracking } = useParams()

    const [senderName, setSendername] = useState()
    const [senderPhone, setSenderphone] = useState()
    const [senderEmail, setSenderemail] = useState()
    const [senderCity, setSenderCity] = useState()
    const [receiverName, setReceivername] = useState()
    const [receiverPhone, setReceiverphone] = useState()
    const [receiverEmail, setReceiveremail] = useState()
    const [receiverCity, setReceivercity] = useState()
    const [tracker, setTracker] = useState()
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
        const formdata = new FormData()
        formdata.append("trackingnumber", tracking)

        axios({
            method: "post",
            url: 'http://shiplive.clonehackers.com/controller/tracking.php',
            data: formdata
        })
            .then(res => {
                if (res.data.status === 'success') {
                    console.log(res.data.data);

                    setSendername(res.data.data.sendername)
                    setSenderemail(res.data.data.senderemail)
                    setSenderphone(res.data.data.senderphone)
                    setSenderCity(res.data.data.senderaddress)
                    setReceivername(res.data.data.receivername)
                    setReceiverphone(res.data.data.receiverphone)
                    setReceiveremail(res.data.data.receiveremail)
                    setReceivercity(res.data.data.receiveraddress)
                    setTracker(res.data.data.tracking)
                    setDeliverytype(res.data.data.method)
                    setWeight(res.data.data.weigth)
                    setDeliverydate(res.data.data.deliverydate)
                    setQty(res.data.data.qty)
                    setBookingdate(res.data.data.bookingdate)
                    setPaymentstatus(res.data.data.payment)
                    setStatus(res.data.data.status)
                    setDescription(res.data.data.description)
                    setComment(res.data.data.comment)

                } else {
                    console.log(res.data);
                }
            })
            .catch(err => console.error(err))
    }, [tracking])


    const handleSubmit = e => {

        e.preventDefault()
        const formdata = new FormData();

        formdata.append('updateShipment', 'updateShipment')
        formdata.append('senderName', senderName)
        formdata.append('senderPhone', senderPhone)
        formdata.append('senderEmail', senderEmail)
        formdata.append('senderCity', senderCity)
        formdata.append('receivername', receiverName)
        formdata.append('receiverPhone', receiverPhone)
        formdata.append('receiverEmail', receiverEmail)
        formdata.append('receiverCity', receiverCity)
        formdata.append('tracking', tracker)
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
            url: 'http://shiplive.clonehackers.com/controller/updateShipment.php',
            data: formdata
        }).then(res => {
            if (res.data.status === "success") {
                console.log(res);
                notify(res.data.data.message)

                setTimeout(() => {
                    props.history.push("/dashboard/manageshipment/")
                }, 1000);
            } else {
                console.log(res);
                notify(res.data.message)
            }
        })
            .catch(error => {
                console.error(error);
            })

    }



    return (
        <div className="container">
            <b>id : {tracking}</b>
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
                                            <input type="text" className="form-control" value={tracker}></input>
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
                                                <option value="pay on delivery" className="form-control">Pay On Delivery</option>
                                            </select>
                                        </div>
                                        <div className="mt-4 ml-4 mb-4">
                                            <label>Status</label>
                                            <select value={status} onChange={event => setStatus(event.target.value)} required className="form-control">
                                                <option value="" className="form-control"> package status</option>
                                                <option value="on hold" className="form-control">On Hold</option>
                                                <option value="canceled" className="form-control">Canceled</option>
                                                <option value="in transit" className="form-control">In Transit</option>
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
                    <button type="submit" style={{ float: "right" }} className="btn btn-sm btn-info"><i className="fa fa-edit mr-1"></i>update Shipment</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(EditShipping)
