import React from 'react'
import Internal_Dropdown from './Internal_Dropdown'
import Horizontal_Card from './Horizontal_Card'

import bb from "./Images/bb.jpg"


function Find_Blood_Bank() {
    return (
        <div className="container-fluid" style={{ height: "100vh", width: "70vw", marginTop: "65px" }}>

            <Internal_Dropdown name="Find Donor" dd1="Select State" dd2="Select City" dd3="Blood Group" />

            <div className="container-fluid row mx-2 my-5" >
                <Horizontal_Card img={bb} name="Blood Bank A" contact="8210189562" add="Phulwari Sharif, Patna -801505"
                blood={[1,2,3,4,5,6,7,8]} />
            </div>


        </div>
    )
}

export default Find_Blood_Bank