import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    console.log(this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.formatBadge()}>{this.formatCount()}</span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Increment{" "}
        </button>
      </div>
    );
  }
  formatCount = () => {
    //object Destructuring
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  formatBadge = () => {
    let classes = "badge m-2 p-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };
}
export default Counter;
