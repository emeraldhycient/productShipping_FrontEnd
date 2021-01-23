import React from 'react'

export default function Footer() {
    let d = new Date()

    let year = d.getFullYear()

    return (
        <footer className=" bg-dark" style={{ paddingTop: "10%" }}>
            <div className="container">

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <h6 className="text-white">Follow Us @</h6>
                        <div className="d-flex text-muted">
                            <i className="fa fa-facebook m-2"></i>
                            <i className="fa fa-twitter m-2"></i>
                            <i className="fa fa-whatsapp  m-2"></i>
                            <i className="fa fa-instagram m-2"></i>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5 mt-4 mb-5">
                        <h6 className="text-white">Subscribe To Our News Letter</h6>
                        <form className="form-inline ">
                            <input type="text" placeholder="Enter Email Address ... " className="form-control col" />
                            <button type="submit" className="btn btn-info">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <h6 className="text-center text-muted mt-5" >Copyright &copy; Shiplive {year}</h6>
        </footer>
    )
}
