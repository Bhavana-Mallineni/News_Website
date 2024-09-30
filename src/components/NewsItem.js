import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, sourceName } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              right: "0",
              position: "absolute",
            }}
          >
            <span className="badge rounded-pill bg-danger">{sourceName}</span>
          </div>

          <img src={imageUrl} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">
              {title} <span className="badge text-bg-secondary">New</span>
            </h5>
            <p className="card-text">{description}.</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm 
    btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
