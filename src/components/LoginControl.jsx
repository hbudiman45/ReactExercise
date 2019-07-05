// exercise from react documentation.
// Conditional Rendering with Login Control Example
import React, { Component } from "react";
import List from "./List";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up</h1>;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <div className="container-fluid">
          <p className="text-secondary">Login Control | React Documentation</p>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      </div>
    );
  }
  // with es6 js if ? true : false;
  // render() {
  //   const isLoggedIn = this.state.isLoggedIn;
  //   return (
  //     <div>
  //       {isLoggedIn ? (
  //         <LogoutButton onClick={this.handleLogoutClick} />
  //       ) : (
  //         <LoginButton onClick={this.handleLoginClick} />
  //       )}
  //     </div>
  //   );
  // }
}
