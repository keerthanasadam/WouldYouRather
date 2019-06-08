import React from "react";
import { connect } from "react-redux";

import Preview from "./Preview";

class Poll extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <p>{question.author} asks</p>
        <div>
          <Preview question={question} />
        </div>
      </div>
    );
  }
}

export default connect()(Poll);
