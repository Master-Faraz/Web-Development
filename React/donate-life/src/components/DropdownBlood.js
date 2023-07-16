import React from 'react'
import PropTypes from 'prop-types'

// Dropdown Menu for selecting states, citises etc

function DropdownBlood(props) {
    return (
        <>
            <div className="container" style={{ color: "black", opacity: "70%", width: "11vw" }}>
                <select className="form-select" aria-label="Default select example">
                    <option selected>{props.name}</option>
                    <option value="1">Bihar</option>
                    <option value="2">Patna</option>
                    <option value="3">AB+</option>
                </select>
            </div>
        </>
    )
}

DropdownBlood.defaultProps = {
    name: 'Enter Name',
}

DropdownBlood.propTypes = {
    name: PropTypes.string,
}

export default DropdownBlood