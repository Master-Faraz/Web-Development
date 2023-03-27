import React from 'react'
import PropTypes from 'prop-types'

// Here we are creating a navigation bar through which we are changing the navigation button using props 

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.prop1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.prop2}</a>
                            </li>

                        </ul>
                        <form className="d-flex  " role="search">
                            <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
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