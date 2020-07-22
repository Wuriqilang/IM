import React from "react";
// import Home from "./Home";
// import Navbar from "./Navbar";
// import StateComponent from "./StateComponent";
import ComponentLife from "./ComponentLife";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "标题1",
    };
  }

  clickChange = () => {
    this.setState({
      title: "标题2",
    });
  };
  //渲染函数
  render() {
    const nav1 = ["首页", "学习", "视频"];
    const nav2 = ["WEB", "Java", "Node"];

    return (
      <div>
        {/* <Navbar nav={nav1} title="导航" /> */}
        {/* <Navbar nav={nav2} title="导航2" /> */}
        {/* <h1>Hello React Component</h1>
        <h3>组件OK</h3> */}
        {/* <Home /> */}
        {/* <StateComponent /> */}
        <ComponentLife title={this.state.title} />
        <button onClick={this.clickChange}>修改Title</button>
      </div>
    );
  }
}

export default App;
