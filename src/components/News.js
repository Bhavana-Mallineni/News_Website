import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      totalResults: 0,
    };

    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - The chronicles`;
  }

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(70);
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      page: this.state.page + 1,
    });
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" }}>
          {" "}
          The Chronicles - Top {this.capitalizeFirstLetter(
            this.props.category
          )}{" "}
          Headlines{" "}
        </h1>
        {/*   */}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container"></div>
          <div className="row">
            {this.state.articles.map((ele, index) => {
              if (ele.title !== "[Removed]" && ele.description !== "[Removed]")
                return (
                  <div className="col-md-4" key={index}>
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
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
