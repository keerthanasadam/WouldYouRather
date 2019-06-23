import React from "react";

import Poll from "./Poll";

export default class PollList extends React.Component {
  render() {
    return (
      <div>
        {this.props.questions.map(question => (
          <Poll
            question={question}
            key={question.id}
            users={this.props.users}
          />
        ))}
      </div>
    );
  }
}
