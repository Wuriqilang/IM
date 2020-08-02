import React, { Component } from "react";

export default class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input2: 0,
    };
  }

  componentDidMount() {
    this.setState({
      input2: this.props.money,
    });
  }

  changeHandler = (e) => {
    this.setState({
      input2: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input2}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}
