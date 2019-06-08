import React from "react";
import { connect } from "react-redux";

import { handleGetQuestions } from "./../actions/questions";
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
      <div>
        <nav className="nav">
          <ul>
            <li>
              <button onClick={this.handleUnAnswered}>
                Unaswered Questions
              </button>
            </li>
            <li>
              <button onClick={this.handleAnswered}>Answered Questions</button>
            </li>
          </ul>
        </nav>
        {this.props.loading === true ? null : (
          <div>
            {this.state.questionType === "answered" ? (
              <PollList questions={this.props.answeredQuestions} />
            ) : (
              <PollList questions={this.props.unansweredQuestions} />
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
  let unansweredIds = users[authedUser].questions;
  return {
    loading:
      Object.entries(questions).length === 0 &&
      questions.constructor === Object,
    answeredQuestions: allQuestions.filter(
      question => answeredIds.findIndex(id => id === question.id) !== -1
    ),
    unansweredQuestions: allQuestions.filter(
      question => unansweredIds.findIndex(id => id === question.id) !== -1
    )
  };
}

export default connect(mapStateToProps)(Home);
