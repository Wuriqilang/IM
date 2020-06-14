# Intelligence Manufacture  一个跨端的智能制造框架

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) [![liences](https://img.shields.io/github/license/Wuriqilang/IM)](https://www.apache.org/licenses/LICENSE-2.0.html) [![Blog](https://img.shields.io/badge/Wuriqilang-Blog-green?link=https://xr1228.com&logo=appveyor&style=like)](https://xr1228.com)


### **为什么会有这个项目?**
从2016年起,我就开始专注于智能制造相关应用的研发,并且深信智能制造将掀起一场工业革命.同时,智能制造也应该是未来许多年中我愿意为之奋斗的事业.
然而,在工业4.0的探索过程中,我发现工厂智能化其实从某种意义上来说,可以说是一个难以实现的伪命题.其原因主要来自:工厂中的需求总是复杂且多变的,很难有一套程序来保证良好的适用各个应用场景.即使有一个设计初衷是尽量满足各种应用场景的智能制造应用,反而无法真正的解决用户需求,映射到现实情况就是:用户总觉得哪里不对,用了几次后,再也没有打开过这个软件.相反的,定制化为某一类用户开发的应用才能解决问题的实际问题.

但是,为了单一场景单独开发一个应用程序无论是从时间成本还是开发效率来说并不"划算".
**似乎智能化与适用性需求无法统一.**

我们不妨换一个思路 —— 智能制造本质其实仍然脱离不了对于数据的应用,工业的智能化改造实质上是通过大量数据的规范化处理,配合特定规则的逻辑运算,形成可以辅助决策者进行生产决策的可视化信息.

所以，我希望建立一个以挖掘数据潜能为核心的智能制造方案。这个方案提供数据采集，清洗，调用接口，将数据使用与组合的权利交给工业工程师。

这种设计模式与Power BI这类产品非常类似，但又有显著的不同：

- 主要服务人群是**一线工程师与基层管理人员**,用户体验与效率是该软件最重要的部分。
- 更具实用价值，很多场景下宁可牺牲大部分人，也要保证满足小部分核心用户的业务需求。
- 跨端：能够满足越来越多的移动端使用场景。
- 系统融合：预留与其他信息化系统连接接口，增加其业务驱动能力。

本仓库包含以下内容：
一个基于Flutter实现的跨端智能制造框架。
 - 设备智能化监控模块
 - 工艺数据智能化监控与预警模块
 - 不良分析模块
 - 基础数据获取模块
 - 支撑以上几个模块功能模块实现的类库


## 技术栈

> 最初，该项目是基于.NET Winform技术实现的。但随着近些年WEB技术的飞速发展（2012-2020），我认为选用一个具有前端基因有能保证运行效率的跨段框架是有必要的。 Flutter或许是个不错的选择

- Flutter
- Nodejs or .net Core3.1(服务端)
- MySql

## 安装(施工中)

这个项目使用 [node](http://nodejs.org) 和 [npm](https://npmjs.com)。请确保你本地安装了它们。

```sh
$ npm install --global standard-readme-spec
```

## 使用说明(施工中)

这只是一个文档包，你可以打印出 [spec.md](spec.md) 到输出窗口。

```sh
$ standard-readme-spec
# Prints out the standard-readme spec
```

## 示例(施工中)

 [example-readmes](example-readmes/)。

## 相关仓库

- [Art of Readme](https://github.com/noffle/art-of-readme) — 💌 写高质量 README 的艺术。


## 维护者

[@Wuriqilang](https://github.com/Wuriqilang)。




## 使用许可

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0.html) © Wuriqilang
