import React, { Component } from "react";
import List from "./List";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItem: "",
      items: ["beli ayam"]
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      // befor es6. items: this.state.items.concat([this.state.toDoItem])
      items: [...this.state.items, this.state.toDoItem],
      toDoItem: ""
    });
    alert("added");
  };

  handleChange = event => {
    this.setState({
      toDoItem: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <p className="text-secondary">
            Simple To Do List Exercise | SekolahKoding
          </p>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.toDoItem}
              onChange={this.handleChange}
              type="text"
              autoFocus
            />
            <button className="btn btn-sm btn-primary m-2">Add</button>
          </form>
          <ListToDo items={this.state.items} />
        </div>
      </div>
    );
  }
}

// stateless functional component
const ListToDo = props => {
  return (
    <div>
      <ul style={{ listStyleType: "decimal" }}>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
