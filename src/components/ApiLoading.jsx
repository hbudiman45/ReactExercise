import React, { Component } from "react";
import List from "./List";
import axios from "axios";

export default class ApiLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: false
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then(response => {
        this.setState({ items: response.data, isLoading: false });
        console.log(this.state.items);
      })
      .catch(error => console.log("BAD", error)); // handling error. if the url isnt correct
  }

  render() {
    // destructuring js es6
    const { items, isLoading } = this.state;

    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <React.Fragment>
        <div className="container-fluid">
          <p className="text-secondary">Api and Loading | SekolahKoding</p>
          {items.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
