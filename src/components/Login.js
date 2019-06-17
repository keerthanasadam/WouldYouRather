import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "./../actions/authedUser";
import { Link } from "react-router-dom";
export class Login extends React.Component {
  state = {
    user: ""
  };

  handleLogin = e => {
    e.preventDefault();
    console.log(this.state.user);
    this.props.dispatch(setAuthedUser(this.state.user));
    this.props.history.push("/home");
  };

  updateUser = event => {
    event.preventDefault();
    this.setState({
      user: event.target.value
    });
  };
  render() {
    const { users } = this.props;
    return (
      <div className="login">
        <div className="login-header">
          <h4> Welcome to the Would You Rather Application!</h4>
          <div> Please sign in to continue</div>
        </div>
        <div className="login-body">
          <h5 className="center"> Sign In Page</h5>
          <form onSubmit={this.handleLogin}>
            <select value={this.state.user} onChange={this.updateUser}>
              <option value="">Select User</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button className="btn" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(Login);
