import React from 'react'

function Parselisting({ allShipment }) {
    return (
        <div className="table-responsive mt-5">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <td>Id</td>
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

    )
}

export default Parselisting
