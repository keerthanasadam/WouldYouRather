import React from "react";
import { connect } from "react-redux";
import Poll from "./Poll";
class PollList extends React.Component {
  render() {
    return (
      <div>
        {this.props.questions.map(question => (
          <Poll question={question} key={question.id} />
        ))}
      </div>
    );
  }
}

export default connect()(PollList);
