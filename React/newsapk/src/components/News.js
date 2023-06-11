import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {


    constructor() {
        super();
        // console.log("News Items constructor")
        // For implementing states
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    // Lifecycle method run after render Method
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1ab18db77fb4428281e985d7ce96e0a4"

        // Fetching data through fetch API
        let data = await fetch(url);
        let parsedData = await data.json()

        console.log(parsedData.articles)

        // Setting articles to parsed data using states
        this.setState({ articles: parsedData.articles })

    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

    handleNextClick = async () => {
        console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Top Headlines</h1>
                <div className="row">
                    {/* Destructurng the array for  getting the key */}
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title} description={element.description} image_url={element.urlToImage} news_url={element.url} />
                        </div>
                    })}
                </div>

                {/* Button Class */}
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News