import React from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";

class Question extends React.Component {
  state = {
    answer: "optionOne"
  };

  handleAnswerChanged = e => {
    const value = e.target.value;
    this.setState(() => ({
      answer: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { answer } = this.state;
    const { dispatch, id, authedUser } = this.props;
    dispatch(
      handleSaveQuestionAnswer({
        authedUser: authedUser,
        qid: id,
        answer
      })
    );
  };

  render() {
    console.log(this.props);
    const question = this.props.question;
    return (
      <form onSubmit={this.handleSubmit}>
        <p> Would You Rather</p>
        <div>
          <input
            type="radio"
            name="question"
            checked={this.state.answer === "optionOne"}
            value="optionOne"
            onChange={this.handleAnswerChanged}
          />{" "}
          {question.optionOne.text}
        </div>
        <div>
          <input
            type="radio"
            name="question"
            value="optionTwo"
            checked={this.state.answer === "optionTwo"}
            onChange={this.handleAnswerChanged}
          />
          {question.optionTwo.text}
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default connect()(Question);
