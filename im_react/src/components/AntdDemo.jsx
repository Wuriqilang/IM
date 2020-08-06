import React, { Component } from "react";
import { DatePicker } from "antd";
import "./AntdDemo.css";
import api from "../utils/api/index";

export default class AntdDemo extends Component {
  constructor() {
    super();
    this.state = {
      userLists: {},
    };
  }

  componentDidMount() {
    api.getUsers().then((data) => {
      this.setState({ userLists: data });
    });

    api.getUserID({ userName: "管理员" }).then((res) => {
      console.log(res);
    });
  }

  render() {
    const { userLists } = this.state;
    return (
      <div id="AntdDemo">
        {userLists.length > 0 ? (
          <div>
            <ul>
              {userLists.map((element, index) => {
                return <li key={index}>{element.userName}</li>;
              })}
            </ul>
          </div>
        ) : (
          <div>等待数据加载</div>
        )}
      </div>
    );
  }
}
