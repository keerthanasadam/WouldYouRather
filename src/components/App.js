import "./App.css";

import React, { Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { handleGetQuestions } from "../actions/questions";
import { handleGetUsers } from "./../actions/users";
import Detail from "./Detail";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import Leader from "./Leader";

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
            <Nav />
            {this.props.loading === true ? (
              <div>
                <Route path="/" component={Login} />
              </div>
            ) : (
              <div>
                <Route path="/home" exact component={Home} />
                <Route path="/question/:id" exact component={Detail} />
                <Route path="/new" exact component={NewQuestion} />
                <Route path="/leader" exact component={Leader} />
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
