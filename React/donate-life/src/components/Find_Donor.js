import React from 'react'
import Dropdown_blood from './Dropdown_blood'


function Find_Donor() {
    return (
        <div className="container-fluid" style={{ height: "100vh", width: "70vw" , marginTop : "3vh"}}>
            {/* <h1>djkshf</h1> */}

            <div className='row align-items-start text-center' >
                <div className="container" >

                    <div className="col-12 " style={{

                        height : "4vh",
                        borderRadius: "30px 30px 0px 0px",
                        background: "linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%)"
                    }}>Find Donor</div>

                    <div className="col-12" style={{
                        height : "6vh",
                        borderRadius: "0px 0px 30px 30px",
                        background: "linear-gradient(180deg, #D3E1EA 0%, rgba(85, 95, 93, 0.00) 100%)"

                    }}>
                        <div className="row" >
                            
                        <div className="col-3 text-center" ><Dropdown_blood/></div>
                        <div className="col-3 text-center">a</div>
                        <div className="col-3 text-center">a</div>
                        <div className="col-3 text-center">a</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Find_Donor