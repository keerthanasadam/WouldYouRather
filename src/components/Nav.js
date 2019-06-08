import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {
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
        <li>User</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}
