import "./App.css";

import React from "react";
import { connect } from "react-redux";

import { handleGetUsers } from "./../actions/users";
import Login from "./Login";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }

  render() {
    return <div className="App">{this.props.loading ? null : <Login />}</div>;
  }
}

function mapStateToProps({ users }) {
  return {
    loading: Object.entries(users).length === 0 && users.constructor === Object
  };
}

export default connect(mapStateToProps)(App);
