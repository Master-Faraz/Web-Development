import React from 'react';
import Avatar from './Avatar'; //.  Importing Avatar 

function Card({ FullName, ...props }) {

    const Card_Style = {
        padding: "10px",
        border: "2px solid black",
        boxShadow: "2px 2px 2px grey",
        margin: "20px"
    }


    return (
        <div style={Card_Style}>
            <Avatar image={props.image} name={FullName} />
            <h1>Computer Science Engineering  </h1>
            <h1>Name : {FullName} </h1>
            <h1>Roll : {props.roll}</h1>
        </div>
    )
}

export default Card   //.   Exporting Avatar