import React, { Component } from "react";
import List from "./List";

class SimpleCRUD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Simple CRUD Application"
    };
  }
  render() {
    return (
      <React.Fragment>
        <h2>{this.state.title}</h2>
      </React.Fragment>
    );
  }
}

export default SimpleCRUD;
