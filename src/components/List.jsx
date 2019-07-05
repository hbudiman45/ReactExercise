import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class List extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="nav flex-row">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            {/* use Link instead anchor tag for better performance.  */}
            {/* If we use NavLink, it's create class 'active' for active tab */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/toggle">
              Handling Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/to_do_list">
              To Do List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/api">
              API & Loading
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login Control
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/react_with_mosh">
              React Tutorial | Mosh
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/simple_crud">
              Simple Crud
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/conditional_rendering">
              Conditional Rendering Exercise
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/hooks">
              useState
            </Link>
          </li>
        </ul>
        <hr />
      </React.Fragment>
    );
  }
}
