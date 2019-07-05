import React, { Component } from "react";
import List from "./List";
import LoginControl from "./LoginControl";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tags: [],
      addTags: ""
    };
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleChange = event => {
    this.setState({ addTags: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      tags: [...this.state.tags, this.state.addTags],
      addTags: ""
    });
  };

  render() {
    return (
      <div>
        <h4>Conditional Rendering Exercise</h4>
        <div>{this.renderTags()}</div>
        <p>{this.state.tags.length === 0 && "Please create new tag"}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.addTags}
            placeholder="add tag here"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default ConditionalRendering;

// in javascript
// true && 'some string'   will return
// some string
// true && 'some string' && 3   will return
// 3
// 'some string' and 'any number exept 0' are truhty

// It works because in JavaScript, true && expression always
// evaluates to expression, and false && expression
// always evaluates to false.
// Therefore, if the condition is true, the element right after &&
// will appear in the output. If it is false, React will ignore
// and skip it.
