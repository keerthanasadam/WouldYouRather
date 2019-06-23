import React from "react";
import { connect } from "react-redux";

import PollList from "./PollList";

class Home extends React.Component {
  state = {
    questionType: "unanswered"
  };
  /*  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  } */

  handleUnAnswered = () => {
    this.setState({
      questionType: "unanswered"
    });
  };

  handleAnswered = () => {
    this.setState({
      questionType: "answered"
    });
  };
  render() {
    return (
      <div className="poll-list">
        <div className="poll-list-header">
          <button
            className={this.state.questionType === "unanswered" ? "active" : ""}
            onClick={this.handleUnAnswered}
          >
            Unaswered Questions
          </button>
          <button
            className={this.state.questionType === "answered" ? "active" : ""}
            onClick={this.handleAnswered}
          >
            Answered Questions
          </button>
        </div>
        {this.props.loading === true ? null : (
          <div>
            {this.state.questionType === "answered" ? (
              <PollList
                questions={this.props.answeredQuestions}
                users={this.props.users}
              />
            ) : (
              <PollList
                questions={this.props.unansweredQuestions}
                users={this.props.users}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  let allQuestions = Object.values(questions);
  let answeredIds = Object.keys(users[authedUser].answers);
  // let unansweredIds = users[authedUser].questions;
  return {
    loading:
      Object.entries(questions).length === 0 &&
      questions.constructor === Object,
    answeredQuestions: allQuestions.filter(
      question => answeredIds.findIndex(id => id === question.id) !== -1
    ),
    unansweredQuestions: allQuestions.filter(
      question => answeredIds.findIndex(id => id === question.id) === -1
    ),
    users: users
  };
}

export default connect(mapStateToProps)(Home);
