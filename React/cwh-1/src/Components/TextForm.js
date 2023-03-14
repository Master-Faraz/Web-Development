import React, { useState } from 'react'

function TextForm(props) {
    const [text, SetText] = useState(" ");

    const handleUP = () => {
        console.log("Button clicked")
        SetText(text.toUpperCase())

    }
    const handleUPONchange = (event) => {
        console.log("handled event")
        SetText(event.target.value)      //. ***************************     Old text is passes to new state   *******************************
    }


    const handleDown = ()=>{
        SetText(text.toLowerCase())

    }

    const buttonStyle = {
        // backgroundColor: "blue",
        borderRadius: "10px",
        color: "white",

        background: "rgb(2,0,36)",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,26,187,1) 2%, rgba(9,15,125,1) 5%, rgba(0,212,255,1) 100%)",
        margin : "0px 20px"
    }
 

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label"></label> */}
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleUPONchange} rows="8"></textarea>

            </div>

            <button className="uppercase" style={buttonStyle} onClick={handleUP}>Convert to uppercase</button>
            <button className="lowercase" style={buttonStyle} onClick={handleDown}>Convert to Lowercase</button>
         
        </>
    )
}

export default TextForm