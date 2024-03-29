import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ab18db77fb4428281e985d7ce96e0a4&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });

        // Fetching data through fetch API
        let data = await fetch(url);
        let parsedData = await data.json()

        // console.log(parsedData.articles)

        // Setting articles to parsed data using states
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

    }

    // Lifecycle method run after render Method
    async componentDidMount() {
        this.updateNews();
    }


    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews()
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '35px' }}>Top {this.capitalizeFirstLetter(this.props.category)}  Headlines</h1>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {/* Destructurng the array for  getting the key */}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} image_url={element.urlToImage} news_url={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}


                </div>

                {/* Button Class */}
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News