import React from "react";
import { render } from "react-dom";

export default class KeyDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [
        {
          name: "wuriqilang",
          age: 20,
          sex: "男",
          jobs: ["111", "2222", "333"],
        },
        {
          name: "libai",
          age: 22,
          sex: "男",
          jobs: ["111", "2222", "333"],
        },
        {
          name: "dufu",
          age: 201,
          sex: "男",
          jobs: ["111", "2222", "333"],
        },
      ],
    };
  }

  clickHander = () => {
    this.setState({
      userInfo: this.state.userInfo.concat({
        name: "sakura",
        age: 30,
        sex: "女",
        jobs: ["333", "111"],
      }),
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.userInfo.map((element, index) => {
            return (
              <li key={index}>
                <span>{element.name}</span>
                <span>{element.age}</span>
                <span>{element.sex}</span>
                <div>
                  {element.jobs.map((childElement, childIndex) => {
                    return <span key={childIndex}>{childElement}</span>;
                  })}
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={this.clickHander}>添加数据</button>
      </div>
    );
  }
}
