import React, { Component } from "react";

export default class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: 0,
    };
  }

  componentDidMount() {
    this.setState({
      input1: this.props.money * 7,
    });
  }

  changeHandler = (e) => {
    this.setState({
      input1: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.money * 7}</p>
        <input
          type="text"
          value={this.state.input1}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}
