import React, { useState } from 'react'
import Faraz from "./Images/Faraz.png"
import Appointment from './Appointment'

function DonateBlood(props) {

  const [post, setPost] = useState("Create")


  return (
    <div >
      <div className="row" style={{ marginTop: "16vh", marginLeft: "15vw", marginRight: "15vw" }}>

        <div className="col-8 " style={{ height: "300px", borderRadius: "40px", background: "linear-gradient(90deg, #83A4D4 0%, #B6FBFF 100%)" }}>
          <div className="row">
            <div className="col-5">
              <img src={Faraz} alt="..." style={{
                width: "160px", height: '160px', borderRadius: "225px", background: "grey", marginTop: "7vh", marginLeft: "3vw"
              }} />
            </div>

            <div className="col-7" style={{ height: "300px" }}>
              <div style={{ marginTop: "7vh" }}>
                <h2>{props.name}</h2>
                <p>Blood Group : <strong>{props.bg}</strong></p>
                <p>Contact : <strong>{props.contact}</strong></p>
                <p>City : <strong>{props.city}</strong></p>
                <p>State : <strong>{props.state}</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="container">
            <div style={{ marginTop: "50px", marginLeft: "100px" }}>
              <button type="button" class="btn  btn-lg" style={{ width: "250px", borderRadius: "40px", background: "linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%)" }} onClick={() => { post === "Create" ? setPost("Remove") : setPost("Create") }}>{post} Post</button>
            </div>
            <div style={{ marginTop: "50px", marginLeft: "100px" }}>
              <button type="button" class="btn  btn-lg" style={{ width: "250px", borderRadius: "40px", background: "linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%)" }} >Schedule Appointment</button>
            </div>
          </div>
        </div>

      </div>

      <div style={{ marginTop: "8vh", marginLeft: "15vw", marginRight: "15vw" }}>
        <h2>Nearest Blood banks</h2>
      </div>

      {/* Blood Bank Components will be shown below */}

    </div>
  )
}

export default DonateBlood