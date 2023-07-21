import React from 'react'

import blood1 from './Images/blood1.jpg'
import blood2 from './Images/blood2.jpg'
import blood3 from './Images/blood3.png'
import blood4 from './Images/blood4.png'

function HomeComponent() {
    return (
        <div className="container-fluid" style={{ height: "100vh", width: "70vw", marginTop: "65px" }}>
            <h1>Home page is in Designing Stage </h1>
            {/* 
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={{blood1}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={blood1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={blood1} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div> */}

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={blood1} class="d-block w-100" alt="..." style={{width:"640px",
   height:"480x"}}/>
                    </div>
                    <div class="carousel-item">
                        <img src={blood3} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={blood4} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>

    )
}

export default HomeComponent