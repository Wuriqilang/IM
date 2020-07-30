import React from "react";

export default class FormDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleSubmit() {}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value}></input>
        </form>
      </div>
    );
  }
}
