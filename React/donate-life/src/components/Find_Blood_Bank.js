import React from 'react'
import Internal_Dropdown from './Internal_Dropdown'
import Horizontal_Card from './Horizontal_Card'

import bb from "./Images/bb.jpg"
import bb2 from "./Images/bb2.jpg"
import bb3 from "./Images/bb3.jpg"


function Find_Blood_Bank() {
    return (
        <div className="container-fluid" style={{ height: "100vh", width: "70vw", marginTop: "65px" }}>

            <Internal_Dropdown name="Find Blood Bank" dd1="Select State" dd2="Select City" dd3="Blood Group" />

            <div className="container-fluid row mx-2 my-5" >
                <Horizontal_Card img={bb} name="Blood Bank A" contact="8210189562" add="Phulwari Sharif, Patna -801505"
                blood={[1,2,3,4,5,6,7,8]} />
            </div>
         
            <div className="container-fluid row mx-2 my-5" >
                <Horizontal_Card img={bb3} name="PRATHAMA BLOOD CENTRE" contact="06115 223 311" add="KS COMPLEX SAGUNA MORE DANAPUR, Cantt Rd, Patna, Bihar 801503"
                blood={[29,25,36,49,55,69,71,83]} />
            </div>
         
            <div className="container-fluid row mx-2 my-5" >
                <Horizontal_Card img={bb2} name="All India Institute of Medical Sciences (AIIMS)" contact="0612 245 1070" add="Aurangabad Rd, Phulwari Sharif, Patna, Bihar 801507"
                blood={[29,25,36,49,55,69,71,83]} />
            </div>

        </div>
    )
}

export default Find_Blood_Bank