import React from "react";
import { connect } from "react-redux";
export class Leader extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div key={user.id} className="leader-board">
            <div>
              <img src={user.avatarURL} alt="user avatar" className="avatar" />
            </div>
            <div className="leader-info">
              <h2>{user.name}</h2>
              <div className="leader-question">
                Answered questions
                <span className="end">{Object.keys(user.answers).length}</span>
              </div>
              <hr />
              <div className="leader-question">
                Created questions
                <span> {user.questions.length} </span>
              </div>
            </div>
            <div className="leader-score">
              <div className="score-header">Score</div>
              <div className="leader-total-score">
                {Object.keys(user.answers).length + user.questions.length}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(Leader);
