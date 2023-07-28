import React from 'react'

function Appointment() {
    return (
        <div className="row" style={{ marginTop: "16vh", marginLeft: "15vw", marginRight: "15vw" }}>
            <label for="exampleDataList" className="form-label">Datalist example</label>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
            </datalist>
        </div>
    )
}

export default Appointment