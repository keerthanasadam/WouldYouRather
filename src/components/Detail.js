import React from "react";
import { connect } from "react-redux";

import Question from "./Question";
import Answer from "./Answer";
export class Detail extends React.Component {
  render() {
    const question = this.props.question;
    const user = this.props.user;
    return (
      <div>
        <p>{user.name} asks</p>
        <div>
          <img src="user.avatarURL" alt="user_avatar" />
          <Question
            id={question.id}
            question={question}
            authedUser={this.props.authedUser}
          />
          <Answer question={question} />
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
  return {
    id,
    question: foundQuestion,
    user: author,
    authedUser
  };
}

export default connect(mapStateToProps)(Detail);
