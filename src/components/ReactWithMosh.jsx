import React, { Component } from "react";
import CountersNav from "./ReactWithMoshComponents/CountersNav";
import Counters from "./ReactWithMoshComponents/Counters";
import List from "./List";

export default class ReactWithMosh extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  // Mounting Phase. 1. Constructor
  constructor(props) {
    super(props);
    console.log("App - Constructor ");
  }
  // Mounting Phase. 3. componentDidMount()
  componentDidMount() {
    console.log("App - Mounted");
    console.log(this.props);
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    // same with this.setState({counters})
    // if the key and value are the same
  };
  render() {
    // Mounting Phase. 2 Render
    console.log("App - Rendered");
    return (
      <div>
        <CountersNav
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
