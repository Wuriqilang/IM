import React from "react";
import AntdDemo from "./components/AntdDemo";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <AntdDemo /> */}
        <Router>
          <Route path="/home" component={Home}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Router>
      </div>
    );
  }
}
