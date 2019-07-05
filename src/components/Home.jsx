import React, { Component } from "react";
import List from "./List";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}

export default Home;
