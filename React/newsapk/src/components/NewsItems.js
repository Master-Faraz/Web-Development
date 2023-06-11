import React, { Component } from 'react'

export class NewsItems extends Component {
    // constructor(){
    //     super();
    //     console.log("This is the news items component")
    // }
    render() {
        let { title, description , image_url , news_url} = this.props;        // for getting props in components

        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}> 
                {/* Above we are using width as js object */}

                    <img src={!image_url?"https://s.w-x.co/util/image/w/in-gamma_ray_burst.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60":image_url }className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={news_url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default NewsItems