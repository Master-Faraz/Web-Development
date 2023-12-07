import React, { useState } from 'react'

const Form = () => {
    let [name, setname] = useState("")
    const [updatedName, setUpdatedName] = useState("")
    const fun = (e) => {
        name = e.target.value
        setname(name)
    }

    const handleSubmit = () => {
        setUpdatedName(name)
    }

    return (
        <div style={{ display: "grid", placeItems: "center", marginTop: "40vh" }}>
            <h1>Hello : {updatedName}</h1>
            {/* Controlled form -> react component handle it not html or etc  -> here value makes it controlled form */}
            <input type="text" onChange={fun} value={name} />
            <button style={{ margin: "3vh" }} onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form