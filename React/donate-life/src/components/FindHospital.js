import React from 'react'
import InternalDropdown from './InternalDropdown'

import bb2 from "./Images/bb2.jpg"
import Hospital from './Hospital'


function FindHospital() {
    return (
        <div className="container-fluid" style={{ height: "100vh", width: "70vw", marginTop: "65px" }}>

            <InternalDropdown name="Find Hospital" dd1="Select State" dd2="Select City" dd3="Select Area" />

            <div className="container-fluid row mx-2 my-5" >
                <Hospital img={bb2} name="All India Institute of Medical Sciences (AIIMS)" contact="0612 245 1070" add="Aurangabad Rd, Phulwari Sharif, Patna, Bihar 801507" beds={[10, 50]} icu = {[5,10]} />
            </div>
            <div className="container-fluid row mx-2 my-5" >
                <Hospital img={bb2} name="All India Institute of Medical Sciences (AIIMS)" contact="0612 245 1070" add="Aurangabad Rd, Phulwari Sharif, Patna, Bihar 801507" beds={[10, 50]} icu = {[5,10]} />
            </div>
            <div className="container-fluid row mx-2 my-5" >
                <Hospital img={bb2} name="All India Institute of Medical Sciences (AIIMS)" contact="0612 245 1070" add="Aurangabad Rd, Phulwari Sharif, Patna, Bihar 801507" beds={[10, 50]} icu = {[5,10]} />
            </div>


        </div>
    )
}

export default FindHospital