import React from "react";
import { connect } from "react-redux";
export class Leader extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div key={user.id}>
            <img src={user.avatarURL} alt="user avatar" />
            <div>
              <h2>{user.name}</h2>
              <p>Answered questions {Object.keys(user.answers).length} </p>
              <p>Created questions {user.questions.length} </p>
            </div>
            <div>
              <p>Score</p>
              <p>{Object.keys(user.answers).length + user.questions.length}</p>
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
