import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("Constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };

    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - The chronicles`;
  }

  async updateNews() {
    console.log("cdm");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5844dd20c394df6966e7ed01d84929c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    console.log(parsedData.totalResults);
  }

  async componentDidMount() {
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5844dd20c394df6966e7ed01d84929c&page=1&pageSize=${this.props.pageSize}`
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults,
    //     loading: false
    // });
    // console.log(parsedData.totalResults);
    this.updateNews();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5844dd20c394df6966e7ed01d84929c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({loading: false});
    // this.setState({page: this.state.page - 1,
    //     articles: parsedData.articles})
    await this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    // if(!(this.state.page  > Math.ceil(this.state.totalArticles/20))){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5844dd20c394df6966e7ed01d84929c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //     this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({loading: false});
    // this.setState({articles: parsedData.articles,
    //     page: this.state.page + 1
    // })
    // }
    await this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center" style={{ margin: "30px 0px" }}>
          {" "}
          The Chronicles - Top {this.capitalizeFirstLetter(
            this.props.category
          )}{" "}
          Headlines{" "}
        </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              if (ele.title !== "[Removed]" && ele.description !== "[Removed]")
                return (
                  <div className="col-md-4" key={ele.url}>
                    <NewsItem
                      title={ele.title ? ele.title : " "}
                      description={ele.description ? ele.description : " "}
                      imageUrl={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://img.freepik.com/premium-photo/news-lettering-blue-background_391052-5080.jpg"
                      }
                      newsUrl={ele.url}
                      author={ele.author ? ele.author : "unknown"}
                      date={ele.publishedAt}
                      sourceName={ele.source.name}
                    />
                  </div>
                );
            })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
