import React from 'react'

const NewsItems = (props) => {
    return (
        <div className='my-3 card-deck'>
            <div className="card">
                <img src={!props.image_url ? "https://s.w-x.co/util/image/w/in-gamma_ray_burst.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60" : props.image_url} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className='text-muted'>By {!props.author ? "Unknown" : props.author} on {new Date(props.date).toGMTString()}</small></p>
                    <div >
                        <a href={props.news_url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsItems