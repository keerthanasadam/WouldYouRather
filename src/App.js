import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { handleGetUsers } from "./actions/users";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default connect()(App);
