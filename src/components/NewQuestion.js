import React from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

export class NewQuestion extends React.Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };

  handleOneChange = e => {
    const value = e.target.value;
    console.log(value);
    this.setState(() => ({
      optionOneText: value
    }));
  };

  handleTwoChange = e => {
    const value = e.target.value;
    this.setState(() => ({
      optionTwoText: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;
    dispatch(
      handleAddQuestion({
        optionOneText,
        optionTwoText
      })
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3> Create New Question</h3>
        <div>
          <p> Complete the question:</p>
          <p>
            <b>Would You rather...</b>
          </p>
          <input
            type="text"
            placeholder="Enter Option One Text Here"
            onChange={this.handleOneChange}
            value={this.state.optionOneText}
          />
          <hr /> OR
          <input
            type="text"
            placeholder="Enter Option Two Text Here"
            onChange={this.handleTwoChange}
            value={this.state.optionTwoText}
          />
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect()(NewQuestion);
