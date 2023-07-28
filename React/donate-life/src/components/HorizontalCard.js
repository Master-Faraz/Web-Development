import React from 'react'
function DonorCard(props) {
    return (

        <div className="container-fluid" style={{ width: "100%", height: "300px", borderRadius: "40px 0px 0px 40px" }}>
            <div className="row " style={{ borderRadius: "40px 0px 0px 40px", background: "linear-gradient(180deg, #D9D9D9 52.97%, rgba(217, 217, 217, 0.00) 100%)" }}>
                {/* Card Image div */}
                <div className="col-md-4 ">
                    <img src={props.img} className="img-fluid" alt="..." style={{ height: "280px", width: "100%", borderRadius: "40px 0px 0px 40px", margin: "0px", padding: "0px" }} />
                </div>

                {/* Card description div */}
                <div className="col-8  ">
                    {/* Here i am dividing div into two halfs */}
                    <div className="row">
                        {/* First half contains blood bank Name, contact and address */}
                        <div className="col-12 " style={{ height: "140px" }}>
                            <div className="row" style={{ height: "70px" }}>
                                <div className="col-9 fw-bold mt-2" > {props.name}</div>
                                <div className="col-3 mb-3 text-center fw-bold" style={{ background: "linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)", borderRadius: "0px 0px 0px 15px" }}> <p className='mt-3 text-white'>{props.contact}</p></div>
                            </div>

                            <div className="row" style={{ height: "70px" }}>
                                <div className="col-12 " >{props.add}</div>
                            </div>
                        </div>

                        

                        {/* The Second half contains the BLOOD AVAILIBILITY status */}
                        <div className="col-12" style={{ height: "140px" }}>

                            <div className="row" style={{ height: "35px" }}>
                                <div className="col fw-bold"> Blood Available</div>
                            </div>

                            <div className="row" style={{
                                height: "105px", borderRadius: "15px",
                                background: "linear-gradient(180deg, #B2FEF9 0%, rgba(143, 216, 226, 0.00) 100%)"
                            }}>
                                <div className="col-3">A+  : {props.blood[0]} units</div>
                                <div className="col-3">A-  : {props.blood[1]} units</div>
                                <div className="col-3">B+  : {props.blood[2]} units</div>
                                <div className="col-3">B-  : {props.blood[3]} units</div>
                                <div className="col-3">AB+  : {props.blood[4]} units</div>
                                <div className="col-3">AB-  : {props.blood[5]} units</div>
                                <div className="col-3">O+  : {props.blood[6]} units</div>
                                <div className="col-3">O-  : {props.blood[7]} units</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DonorCard

