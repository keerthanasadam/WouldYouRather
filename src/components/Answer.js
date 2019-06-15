import React from "react";
export default class Answer extends React.Component {
  render() {
    const { question } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    return (
      <div>
        <p>Results:</p>
        <div className="result">
          <p>Would you rather {question.optionOne.text}</p>
          <p>
            {optionOneVotes} out of {totalVotes} votes
          </p>
        </div>
        <div className="result">
          <p>Would you rather {question.optionTwo.text}</p>
          <p>
            {optionTwoVotes} out of {totalVotes} votes
          </p>
        </div>
      </div>
    );
  }
}
