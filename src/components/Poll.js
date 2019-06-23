import React from "react";

import Preview from "./Preview";

export default class Poll extends React.Component {
  render() {
    const question = this.props.question;
    const user = Object.values(this.props.users).find(
      user => user.id === question.author
    );
    return (
      <div className="poll">
        <div className="poll-header">{user.name} asks</div>
        <div>
          <Preview question={question} />
        </div>
      </div>
    );
  }
}
