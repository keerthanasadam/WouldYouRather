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
    this.props.showQuestion(false, answer);
  };

  render() {
    const question = this.props.question;
    return (
      <form onSubmit={this.handleSubmit} className="poll-question">
        <h3> Would You Rather ...</h3>
        <div className="question-option">
          <input
            type="radio"
            name="question"
            checked={this.state.answer === "optionOne"}
            value="optionOne"
            onChange={this.handleAnswerChanged}
          />
          <span>{question.optionOne.text}</span>
        </div>
        <div className="question-option">
          <input
            type="radio"
            name="question"
            value="optionTwo"
            checked={this.state.answer === "optionTwo"}
            onChange={this.handleAnswerChanged}
          />
          <span>{question.optionTwo.text}</span>
        </div>

        <button className="btn">Submit</button>
      </form>
    );
  }
}

export default connect()(Question);
