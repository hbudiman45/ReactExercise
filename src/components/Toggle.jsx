import React, { Component } from "react";
import List from "./List";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { ToggleStatus: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ ToggleStatus: !prevState.ToggleStatus }));
  }
  // handleClick() {
  //   this.setState(state => ({ ToggleStatus: !state.ToggleStatus }));
  // }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <p className="text-secondary">
            Handling Events | React Documentation
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            {this.state.ToggleStatus ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    );
  }
}

export default Toggle;
