import React from 'react'
import PropTypes from 'prop-types'


function Card(props) {
    return (
        <div className="card my-5 mx-5" style={{ width: "200px", borderRadius: "20px", height: "250px" }} >
            <img src={props.img} className="card-img-top" alt="..." style={{ width: "200px", borderRadius: "20px", height: "150px" }} />

            <div className="card-body">
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-center" style={{
                    background: "linear-gradient(90deg, #ABBAAB 0%,#FFF 100%)"}}>{props.name}</li>
            </ul>
            <div className="container">
                <div className="row">

                    <button type="button" className="btn btn-primary col-6 " style={{ height: "100%", background: "linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%)", color: "black", borderRadius: "0px 0px 0px 20px" }}>{props.bg}</button>
                    <button type="button" className="btn btn-primary col-6 " style={{ height: "100%", background: "linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%)", color: "black", borderRadius: "0px 0px 20px 0px" }}>Contact</button>

                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    img: '...',
    name: 'Enter Name',
    bg: 'blood Group',
}

Card.propTypes = {
    name: PropTypes.string,
    bg: PropTypes.string,
}

export default Card