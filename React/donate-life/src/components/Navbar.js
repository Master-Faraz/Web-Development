import React from 'react'
import logo_img from './Images/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img src={logo_img} alt="Logo" width="30px" height="30px" className="d-inline-block align-text-top myt-1" />
                        Donate Life
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home" key="1">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="donateblood" key="2">Donate Blood</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="donor" key="3">Find Donor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="bloodbanks" key="4">Blood Banks</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="hospital" key="5">Hospital Beds</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="hospital" key="6">Nearest Hospital</Link>
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

