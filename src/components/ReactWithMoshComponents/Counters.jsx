import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  // handleIncrement = counter => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleDecrement = counter => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value--;
  //   this.setState({ counters });
  // };

  // handleDelete = counterId => {
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters: counters });
  //   // same with this.setState({counters})
  //   // if the key and value are the same
  // };
  render() {
    const {
      counters,
      onReset,
      onIncrement,
      onDecrement,
      onDelete
    } = this.props;
    console.log("Counters - Rendered");
    return (
      <div>
        <div className="container-fluid">
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
              counter={counter}
              // value={counter.value}
              // id={counter.id}
            >
              <p className="m-2">Counter #{counter.id}</p>
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}
