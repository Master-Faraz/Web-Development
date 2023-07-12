import React from 'react'
import bb from "./Images/bb.jpg"

function Horizontal_Card() {
    return (
        <div class="card mb-3" style={{ width: "100%", height: "279px" }}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={bb} class="img-fluid rounded-start" alt="..." style={{ height: "279px", width: "453px", borderRadius: "40px 0px 0px 40px" }} />
                </div>
                <div class="col-md-8" style={{
                    background: "linear-gradient(180deg, #D9D9D9 52.97%, rgba(217, 217, 217, 0.00) 100%)"
                }}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Horizontal_Card