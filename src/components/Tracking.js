import React, { useState } from 'react'
import axios from "axios"


import Footer from './Footer'
import Header from './Header'
import SecondSubHeader from './SecondSubHeader'


export default function Tracking() {

    const [tracking, setTracking] = useState();
    const [products, setproducts] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("trackingnumber", tracking)

        axios({
            method: "post",
            url: 'http://localhost/rald/producttrackerapi/api_v1/controller/tracking.php',
            data: formdata
        })
            .then(res => {
                if (res.data.status === 'success') {
                    setproducts(res.data.data)
                } else {
                    console.log(res.data);
                }
            })
            .catch(err => console.error(err))

    }

    const Table = () => {
        return (

            <div className="table-responsive mt-5">
                <div className="bg-light text-info p-2"><h4><center>Booking Details For Tracking :<span className="text-danger"> {tracking}</span></center></h4></div>
                <table className="table table-striped" border="1px">
                    <tbody>
                        <tr>
                            <td>Tracking</td>
                            <td>{products.tracking}</td>
                            <td><b className="text-danger">Shipment Status</b></td>
                            <td>{products.status}</td>
                        </tr>
                        <tr>
                            <td>Booking Date</td>
                            <td>{products.bookingdate}</td>
                            <td>Schedule delivery</td>
                            <td>{products.deliverydate}</td>
                        </tr>
                        <tr>
                            <td>Sender Name</td>
                            <td>{products.sendername}</td>
                            <td>Sender Phone</td>
                            <td>{products.senderphone}</td>
                        </tr>
                        <tr>
                            <td>Sender Email</td>
                            <td>{products.senderemail}</td>
                            <td>Sender Address</td>
                            <td>{products.senderaddress}</td>
                        </tr>
                        <tr>
                            <td>Receiver Name</td>
                            <td>{products.receivername}</td>
                            <td>receiver phone</td>
                            <td>{products.receiverphone}</td>
                        </tr>
                        <tr>
                            <td>Receiver Email</td>
                            <td>{products.receiveremail}</td>
                            <td>Receiver Address</td>
                            <td>{products.receiveraddress}</td>
                        </tr>
                        <tr>
                            <td>Shipment Type</td>
                            <td>{products.method}</td>
                            <td>Weight</td>
                            <td>{products.weigth}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td>{products.qty}</td>
                            <td>Payment</td>
                            <td>{products.payment}</td>
                        </tr>
                        <tr>
                            <td>Comment</td>
                            <td colSpan="3">{products.comment}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td colSpan="3">{products.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    console.log(products);


    return (
        <>
            <Header />
            <SecondSubHeader title="Tracking" />
            <div className="container-fluid mb-5" style={{ marginTop: "-12%" }}>
                <div className="row">
                    <div className="col-md-6 m-auto pt-5">
                        <div className="card p-2 mt-5 bg-light">
                            <form className="form-group" onSubmit={handleSubmit}>
                                <h6 className="mb-2">Enter Product Tracking</h6>
                                <input type="text" id="tracing" className="form-control mb-2" value={tracking} onChange={event => setTracking(event.target.value)} required />
                                <button className="btn btn-info" style={{ float: "right" }}>Search</button>
                            </form>
                        </div>
                        {
                            products ? <Table /> : ""
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
