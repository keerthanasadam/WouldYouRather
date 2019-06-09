import React from "react";
class Preview extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <img src={question.avatarURL} className="avatar" alt="User Avatar" />
        <div>
          <p> Would You Rather</p>
          <div>{question.optionOne.text}</div>
          <button> View Poll</button>
        </div>
      </div>
    );
  }
}

export default Preview;
