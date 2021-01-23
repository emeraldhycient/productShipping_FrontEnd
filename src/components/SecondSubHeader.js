import React from 'react'

function SecondSubHeader({ title }) {
    return (
        <>
            <div id="subheader">
                <div id="blur">
                    <div id="brander" className="container">
                        <center>
                            <h2 className="text-white"><span id="subheadertitle">{title}</span></h2>
                        </center>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SecondSubHeader
