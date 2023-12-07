import React, { useState } from 'react'

function Clock() {
    const localtime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(localtime)
    setInterval(() => {
        const localtime = new Date().toLocaleTimeString()
        setTime(localtime)
    }, 1000)
    return (
        <div style={{ display: "grid", placeItems: "center", marginTop: "40vh" }}>
            <h1 >
                {time}
            </h1>
        </div>
    )
}

export default Clock