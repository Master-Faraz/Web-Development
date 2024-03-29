import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Here we are creating a navigation bar through which we are changing the navigation button using props 

function Navbar(props) {

    return (
        <>
            {/* Props .mode from app.js */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.prop1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.prop2}</Link>
                            </li>

                        </ul>

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>

                            {/* Here we use Ternary Operator for toggle Modes  */}
                            {/* And we use {} -> For JS and `` -> for inserting JS in ${}  */}

                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar


Navbar.propTypes = {
    title: PropTypes.string.isRequired, //.*********       Must be included while passing the props
    prop1: PropTypes.string
}

Navbar.defaultProps = { //.***************************     Default value of props
    title: "Default title",
    prop2: "ABOUT"
}