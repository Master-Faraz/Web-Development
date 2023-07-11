import React from 'react'
import logo_img from './Images/Logo.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo_img} alt="Logo" width="30px" height="30px" className="d-inline-block align-text-top myt-1" />
                        Donate Life
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Donate Blood</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Find Donor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blood Banks</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Hospital Beds</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Nearest Hospital</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-md-2 btn-sm " type="button" >Donor Login</button>
                        <button className="btn btn-primary btn-sm" type="button">Blood Bank Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

