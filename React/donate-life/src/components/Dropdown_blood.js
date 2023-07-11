import React from 'react'


// Dropdown Menu for selecting states, citises etc

function Dropdown_blood(props) {
    return (
        <>
            <div className="dropdown" >
                <a className="btn btn-secondary dropdown-toggle" style={{color: "black",opacity:"70%"}} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.name}

                </a>

                {/* Dropdown list items */}
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </>
    )
}

export default Dropdown_blood