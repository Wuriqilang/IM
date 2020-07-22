import React from "react";

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }

  increment = () => {
    this.setState({
      count: (this.state.count += 1),
    });
  };
  decrement = () => {
    this.setState({
      count: (this.state.count -= 1),
    });
  };

  render() {
    return (
      <div>
        <h3>组件的State</h3>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>增加</button>
        <button onClick={this.decrement}>减少</button>
      </div>
    );
  }
}
