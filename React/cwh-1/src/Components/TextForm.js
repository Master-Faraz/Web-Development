import React, { useState } from 'react'

function TextForm(props) {
    const [text, SetText] = useState("");
    const [Email, SetEmail] = useState([]);
    
    const handleUP = () => {
        console.log("Button clicked")
        SetText(text.toUpperCase())
        
    }
    const handleUPONchange = (event) => {
        console.log("handled event")
        SetText(event.target.value)      //. ***************************     Old text is passes to new state   *******************************
    }
    
    
    const handleDown = () => {
        SetText(text.toLowerCase())
        
    }
    
    const handleClear = () => {
        let new_text = ""
        SetText(new_text);
    }
    
    const handleEmail = () => {
        var email_arr = text.match(/[\w\d.-]+@[\w\d.-]+/g)       //.        Regular Expression for email extraction
        SetEmail(email_arr);
        
    }
    
    const handleCapitalize = () => {
        const nameCapitalized = text.charAt(0).toUpperCase() + text.slice(1);
        SetText(nameCapitalized)
    }
    const handleTitleCase = () => {
        let new_text = text.replace(/\b[a-z]/g, (x) => x.toUpperCase())
        SetText(new_text)
    }


    // const [theme, SetTheme] = useState({
    //     backgroundColor: "white",
    //     color: "black"
    // });
    // const [btn_Theme, ToggleTheme] = useState("Enable Dark Mode")

    // const handleTheme = () => {
    //     let x = btn_Theme

    //     if (x === "Enable Dark Mode") {
    //         ToggleTheme("Enable Light Mode")
    //         SetTheme({
    //             backgroundColor: "black",
    //             color: "white"
    //         })
    //     }
    //     else {
    //         ToggleTheme("Enable Dark Mode")
    //         SetTheme({
    //             backgroundColor: "white",
    //             color: "black"
    //         })
    //     }

    // }

    // const FullTheme = ()=>
    // {
    //     if(props.mode==='light')
    //     {
    //         ToggleTheme("Enable Dark Mode")
    //         handleTheme()
    //     }
    //     else{
    //         ToggleTheme("Enable Light Mode")
    //         handleTheme()
    //     }
    // }

    const buttonStyle = {
        // backgroundColor: "blue",
        borderRadius: "10px",
        color: "white",

        // background: "rgb(2,0,36)",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,26,187,1) 2%, rgba(9,15,125,1) 5%, rgba(0,212,255,1) 100%)",
        // margin: "0px 20px"
    }

    return (
        <div style={{backgroundColor : props.mode === 'dark' ? 'rgb(53,54,58)' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}}>
            {/************************************************      whole textbox     ******************************************************/}
            <div className="mb-3">
                <h1>{props.heading}</h1>
                {/* <label for="myBox" className="form-label"></label> */}
                <textarea className="form-control" value={text} onChange={handleUPONchange} rows="8" ></textarea>

            </div>
            {/* //.*******************************************      Buttons     ***************************************** */}

            <button className="uppercase " style={buttonStyle} onClick={handleUP}>Convert to uppercase</button>
            <button className="lowercase mx-2" style={buttonStyle} onClick={handleDown}>Convert to Lowercase</button>
            <button className=" mx-2" style={buttonStyle} onClick={handleClear}>Clear Text</button>
            <button className=" mx-2" style={buttonStyle} onClick={handleEmail}>Email Extractor</button>
            <button className=" mx-2" style={buttonStyle} onClick={handleCapitalize}>Capitalize</button>
            <button className=" mx-2" style={buttonStyle} onClick={handleTitleCase}>Title Case</button>

            {/* //.******************************************************************************************************* */}

            <div className="container my-4">

                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters </p>
            </div>

            <div className="container my-4">
                <h2>Emails </h2>
                <p> {Email.map((email, index) => <li key={index}>{email}</li>)}</p>
            </div>

            <div className="container my-4">
                <h2> Preview </h2>
                <p>{text.length>0?text:"Enter Something above to preview Here"}</p>
            </div>

            {/* <div className="container my-4">
                <button className='my-3' style={buttonStyle} onClick={handleTheme}>{btn_Theme}</button>
            </div> */}

        </div>
    )
}

export default TextForm