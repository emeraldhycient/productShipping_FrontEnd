import React from 'react'


import Sidebar from './Sidebar';
import Header from './Header';

export default function Home() {

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-2 sidebarmaincontainer">
                    <Sidebar />
                </div>
                <div className="col-md-10 largecontainer"></div>
            </div>
        </>
    )
}
