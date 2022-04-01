# haroro-cli

[<img src="https://img.shields.io/static/v1?label=NPM&labelColor=cb0014&message=haroro-cli&color=black"/>](https://www.npmjs.com/package/haroro-cli)
[<img src="https://img.shields.io/static/v1?label=Github&labelColor=green&message=haroro-cli&color=black"/>](https://github.com/iHaroro/haroro-cli)

## 模板项目脚手架

创建模板项目的脚手架工具，不断收录更多的有值模板项目...
<br/>
目前为止只有 `react-entry-template` 一个项目。([react多入口项目模板](https://github.com/iHaroro/react-entry-template))

## 项目模板列表

| 项目名称`<projectName>`  |        项目描述        |                                                                                  项目地址                                                                                   |
|:--------------------:|:------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| react-entry-template |     React多入口项目     | [<img src="https://img.shields.io/static/v1?label=Github&labelColor=green&message=react-entry-template&color=black"/>](https://github.com/iHaroro/react-entry-template) |
| vue3-entry-template  | vue3多入口项目(仍在建设中🚧) |  [<img src="https://img.shields.io/static/v1?label=Github&labelColor=green&message=vue3-entry-template&color=black"/>](https://github.com/iHaroro/vue3-entry-template)  |

## 命令使用

```shell
# 安装
npm i haroro-cli -g
# 创建项目模板
haroro-cli create --dirname you-project-dir-name
# 进入项目目录
cd you-project-dir-name
# 创建新模块
haroro-cli module demo1
```

## Command

## **create**

创建模板项目

`haroro-cli create [options]`

#### options

|选项|描述|默认值|
|:---:|:---:|:---:|
|`--dirname`|目标文件夹名称|`<projectName>`|

<hr/>

## **module**

创建多入口项目的页面入口模块

_PS：请在模板项目根目录执行该命令_

`haroro-cli module <name> [options]`

#### options

|选项|描述|默认值|
|:---:|:---:|:---:|
|`--dirname`|目标模板模块名称|`project-root/src/pages`|

<hr/>

