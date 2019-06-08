import "./App.css";

import React, { Fragment } from "react";
import { connect } from "react-redux";

import { handleGetUsers } from "./../actions/users";
import Login from "./Login";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleGetQuestions } from "../actions/questions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers());
    this.props.dispatch(handleGetQuestions());
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <Fragment>
          <div className="container">
            {this.props.loading === true ? (
              <div>
                <Route path="/" component={Login} />
              </div>
            ) : (
              <div>
                <Nav />
                <div>
                  <Route path="/home" exact component={Home} />
                </div>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
