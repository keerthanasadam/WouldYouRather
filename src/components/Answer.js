import React from "react";

export default class Answer extends React.Component {
  state = {
    user: ""
  };
  render() {
    const question = this.props.question;
    const userOption = this.props.selectedAnswer;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    return (
      <div className="poll-answer">
        <h3>Results:</h3>
        <div className={`result ${userOption === "optionOne" ? "user" : ""}`}>
          <h4>Would you rather {question.optionOne.text}</h4>
          <h4 className="center">
            {optionOneVotes} out of {totalVotes} votes
          </h4>
          {userOption === "optionOne" ? (
            <span className="vote">Your Vote</span>
          ) : (
            ""
          )}
        </div>
        <div className={`result ${userOption === "optionTwo" ? "user" : ""}`}>
          <h4>Would you rather {question.optionTwo.text}</h4>
          <h4 className="center">
            {optionTwoVotes} out of {totalVotes} votes
          </h4>
          {userOption === "optionTwo" ? (
            <span className="vote">Your Vote</span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
