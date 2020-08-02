import React from "react";

export default class RefsAndDom extends React.Component {
  constructor() {
    super();
    this.HelloDev = React.createRef();
  }

  componentDidMount() {
    console.log(this.HelloDev.current);
    this.HelloDev.current.style.color = "#0F0";
  }

  render() {
    return (
      <div>
        RefsAndDom
        <div ref={this.HelloDev}>REF</div>
      </div>
    );
  }
}
