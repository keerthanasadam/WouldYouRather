import React from "react";
import { Link } from "react-router-dom";

class Preview extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div className="poll-body">
        <img src={question.avatarURL} className="avatar" alt="User Avatar" />
        <div className="poll-preview">
          <h4> Would You Rather</h4>
          <p>{question.optionOne.text}</p>
          <Link to={`/question/${question.id}`}>
            <button className="btn"> View Poll</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Preview;
