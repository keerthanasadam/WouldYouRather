import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "./../actions/authedUser";
export class Login extends React.Component {
  state = {
    user: ""
  };

  handleLogin = e => {
    e.preventDefault();
    console.log(this.state.user);
    this.props.dispatch(setAuthedUser(this.state.user));
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
      <div className="d-flex align-items-center">
        <div className="card">
          <div className="card-header">
            Welcome To The Would You Rather Application
          </div>
          <div className="card-body">
            <h5 className="card-title"> SignIn Page</h5>
            <form onSubmit={this.handleLogin}>
              <select value={this.state.user} onChange={this.updateUser}>
                <option value="">Select User</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              <button type="submit">Sign In</button>
            </form>
          </div>
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
