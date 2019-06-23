import React from "react";
import { connect } from "react-redux";

import Answer from "./Answer";
import Question from "./Question";

export class Detail extends React.Component {
  state = {
    showQuestion: "",
    authedUserOption: ""
  };

  componentDidMount() {
    let show, value;
    const element = Object.keys(this.props.answers).find(
      answerId => answerId === this.props.question.id
    );
    console.log(element);
    if (!!element) {
      show = false;
      value = this.props.answers[element];
    } else {
      show = true;
    }
    this.setState({ showQuestion: show });
    this.setState({ authedUserOption: value });
  }

  handleChange = (value, answer) => {
    this.setState({
      showQuestion: value
    });
    this.setState({ authedUserOption: answer });
  };

  render() {
    const question = this.props.question;
    const user = this.props.user;
    return (
      <div className="poll">
        <div className="poll-header">{user.name} asks: </div>
        <div className="poll-body">
          <img src={user.avatarURL} alt="user_avatar" className="avatar" />
          {this.state.showQuestion ? (
            <Question
              id={question.id}
              question={question}
              authedUser={this.props.authedUser}
              showQuestion={this.handleChange}
            />
          ) : (
            <Answer
              question={question}
              selectedAnswer={this.state.authedUserOption}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const foundQuestion = Object.values(questions).find(
    question => question.id === id
  );
  const author = Object.values(users).find(
    user => user.id === foundQuestion.author
  );
  const authedUserAnswers = Object.values(users).find(
    user => user.id === authedUser
  ).answers;
  return {
    id,
    question: foundQuestion,
    user: author,
    authedUser,
    answers: authedUserAnswers
  };
}

export default connect(mapStateToProps)(Detail);
