import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar  ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="./assets/images/logo.svg" alt="" width="30" height="24" />
            Todo's App
          </NavLink>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" activeClassName="selected">
                My TODO <span class="sr-only">(current)</span>
              </NavLink>
              <NavLink
                class="nav-link"
                to="/add-todo"
                activeClassName="selected"
              >
                ADD TODO
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
