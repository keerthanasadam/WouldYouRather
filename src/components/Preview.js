import React from "react";
import { Link } from "react-router-dom";
class Preview extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <img src={question.avatarURL} className="avatar" alt="User Avatar" />
        <div>
          <p> Would You Rather</p>
          <div>{question.optionOne.text}</div>
          <Link to={`/question/${question.id}`}>
            <button> View Poll</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Preview;
