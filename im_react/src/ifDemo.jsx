import React from "react";

export default class IfDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      names: ["张三"],
    };
  }

  clickHander = () => {
    this.setState({
      isLogin: true,
    });
  };

  render() {
    const { names } = this.state;
    let showView = this.state.isLogin ? (
      <div>Wuriqilang</div>
    ) : (
      <div>请登录</div>
    );
    return (
      <div>
        条件渲染：{showView}
        <button onClick={this.clickHander}>登陆</button>
        {names.length > 0 ? (
          <div>
            {names.map((element, index) => {
              return <p key={index}>{element}</p>;
            })}
          </div>
        ) : (
          <div>请等待数据正在请求</div>
        )}
      </div>
    );
  }
}
