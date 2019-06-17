import React from "react";
import { connect } from "react-redux";

import Question from "./Question";
import Answer from "./Answer";
export class Detail extends React.Component {
  state = {
    showQuestion: ""
  };

  componentDidMount() {
    console.log(Object.keys(this.props.user.answers));
    const show =
      Object.keys(this.props.user.answers).find(
        answerId => answerId !== this.props.question.id
      ) !== -1;
    console.log("showQuestion", show);
    this.setState({ showQuestion: show });
  }

  handleChange = value => {
    this.setState({
      showQuestion: value
    });
  };

  render() {
    const question = this.props.question;
    const user = this.props.user;
    return (
      <div className="poll">
        <div className="poll-header">{user.name} asks: </div>
        <div className="poll-body">
          <img src="user.avatarURL" alt="user_avatar" className="avatar" />
          {this.state.showQuestion ? (
            <Question
              id={question.id}
              question={question}
              authedUser={this.props.authedUser}
              showQuestion={this.handleChange}
            />
          ) : (
            <Answer question={question} />
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
  return {
    id,
    question: foundQuestion,
    user: author,
    authedUser
  };
}

export default connect(mapStateToProps)(Detail);
