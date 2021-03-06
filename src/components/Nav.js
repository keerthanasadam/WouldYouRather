import { NavLink, Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

export class Nav extends React.Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leader" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
        </ul>
        {this.props.user == null ? null : (
          <div className="user-info">
            <div>Hello, {this.props.user.name}</div>
            <img
              className="avatar-small"
              src={this.props.user.avatarURL}
              alt="User avatar"
            />
            <ul>
              <li>
                <Link to={"/"} onClick={this.handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser]
  };
}
export default connect(mapStateToProps)(Nav);
