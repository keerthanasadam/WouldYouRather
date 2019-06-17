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
      <div className="new-question">
        <h3 className="new-header"> Create New Question</h3>
        <form onSubmit={this.handleSubmit} className="new-body">
          <div> Complete the question:</div>
          <h3>Would You rather...</h3>
          <input
            type="text"
            placeholder="Enter Option One Text Here"
            onChange={this.handleOneChange}
            value={this.state.optionOneText}
          />
          <div className="divider"> OR</div>
          <input
            type="text"
            placeholder="Enter Option Two Text Here"
            onChange={this.handleTwoChange}
            value={this.state.optionTwoText}
          />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
