import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = []

    constructor(){
        super();
        console.log("Constructor from News component");
        this.state = { 
            articles: this.articles,
            loading: false,
            page: 1,
         }
    } 

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e5844dd20c394df6966e7ed01d84929c&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults});
        console.log(parsedData.totalResults);
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e5844dd20c394df6966e7ed01d84929c&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({page: this.state.page - 1,
            articles: parsedData.articles})        
    }

    handleNextClick = async () => {
        if(this.state.page  > Math.ceil(this.state.totalArticles/20)){

        }else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e5844dd20c394df6966e7ed01d84929c&page=${this.state.page + 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, 
            page: this.state.page + 1
        })
        }
        
    }

  render() {
    return (
      <div className='container my-4'>

       <h2>The Chronicles - Top Headlines</h2>
       
       <div className="row">
        { this.state.articles.map((ele)=> {
           
                 return <div className='col-md-4' key={ele.url}>
                <NewsItem  title={ele.title? ele.title : " "}  description={ele.description ? ele.description : " "} imageUrl = {ele.urlToImage ? ele.urlToImage : "https://img.freepik.com/premium-photo/news-lettering-blue-background_391052-5080.jpg" } newsUrl={ele.url} />
            </div>
            
        })}
            </div>

            <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalArticles/20)}className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            
        </div>
    )
  }
}

export default News
