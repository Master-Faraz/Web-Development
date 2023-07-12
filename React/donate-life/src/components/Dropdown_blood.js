import React from 'react'
// Dropdown Menu for selecting states, citises etc

function Dropdown_blood(props) {
    return (
        <>
            <div className="container" style={{ color: "black", opacity: "70%", width: "11vw" }}>
                <select class="form-select" aria-label="Default select example">
                    <option selected>{props.name}</option>
                    <option value="1">Bihar</option>
                    <option value="2">Patna</option>
                    <option value="3">AB+</option>
                </select>
            </div>
        </>
    )
}

export default Dropdown_blood