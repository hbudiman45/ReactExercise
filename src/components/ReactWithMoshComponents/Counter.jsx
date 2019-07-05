import React, { Component } from "react";

class Counter extends Component {
  // in this local component have no longer local state, it will
  // refference to state in Counters component
  //
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: this.props.counter.value
  //   };
  // }
  // this.handleIncrement = this.handleIncrement.bind(this);
  // this.handleDecrement = this.handleDecrement.bind(this);

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
