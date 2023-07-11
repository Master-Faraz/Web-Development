import React from 'react'
import Internal_Dropdown from './Internal_Dropdown'
import Card from './Card'

import Faraz from './Images/Faraz.png'
import Sumit from './Images/Sumit.png'
import Sahil from './Images/Sahil.png'
import harsh from './Images/harsh.png'
import Atif from './Images/Atif.png'

function Find_Donor() {
    return (
        <div className="container-fluid" style={{ height: "100vh", width: "70vw", marginTop: "65px" }}>

            {/* Find Donor_Dropdown 
                Here i am passing props to component internal dropdown
            */}
            <Internal_Dropdown name="Find Donor" dd1="Select State" dd2="Select City" dd3="Blood Group" />

            <div className="row " style={{ marginTop: "25px"  }}>
                <div className="col-4 "><Card  name="Faraz" img={Faraz} bg = "AB+"/></div>
                <div className="col-4 "><Card  name="Sumit" img={Sumit} bg = "A+"/></div>
                <div className="col-4 "><Card  name="Sahil" img={Sahil} bg = "B+"/></div>
                <div className="col-4 "><Card  name="Atif" img={Sumit} bg = "A-"/></div>
                <div className="col-4 "><Card  name="Harsh" img={harsh} bg = "B-"/></div>
                <div className="col-4 "><Card  name="Faraz" img={Faraz} bg = "AB+"/></div>
                <div className="col-4 "><Card  name="Sumit" img={Sumit} bg = "A+"/></div>
                <div className="col-4 "><Card  name="Sahil" img={Sahil} bg = "B+"/></div>
                <div className="col-4 "><Card  name="Faraz" img={Faraz} bg = "AB+"/></div>
                <div className="col-4 "><Card  name="Sumit" img={Sumit} bg = "A+"/></div>
                <div className="col-4 "><Card  name="Sahil" img={Sahil} bg = "B+"/></div>
                <div className="col-4 "><Card  name="Atif" img={Sumit} bg = "A-"/></div>
                <div className="col-4 "><Card  name="Harsh" img={harsh} bg = "B-"/></div>
                <div className="col-4 "><Card  name="Faraz" img={Faraz} bg = "AB+"/></div>
                <div className="col-4 "><Card  name="Sumit" img={Sumit} bg = "A+"/></div>
                <div className="col-4 "><Card  name="Sahil" img={Sahil} bg = "B+"/></div>

            </div>
        </div>
    )
}

export default Find_Donor