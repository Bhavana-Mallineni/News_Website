import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSizeNo = 20;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 10,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSizeNo}
                  country={"us"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  keu="business"
                  pageSize={this.pageSizeNo}
                  country={"us"}
                  category={"business"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSizeNo}
                  country={"us"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSizeNo}
                  country={"us"}
                  category={"general"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSizeNo}
                  country={"us"}
                  category={"health"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSizeNo}
                  country={"us"}
                  category={"science"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSizeNo}
                  country={"us"}
                  category={"sports"}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSizeNo}
                  country={"us"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
